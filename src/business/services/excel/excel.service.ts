import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import { Participant } from 'src/business/models/programme';

@Injectable()
export class ExcelService {

    baseXlsmPath = 'src/business/resources/AIO.xlsm';
    pathToSaveDocument = 'assets/';
    columnsIndexMusique = ["N", "O", "P", "Q", "R", "S", "T"];
    columnIndexParticipant = "C"
    lineIndexStart = 7

    musiqueExample = "1h6h2h(19)1h2h(18)1h1sTs";

    private fs = require('fs');

    constructor() { }

    public readFile() {
        const wb = xlsx.readFile(this.baseXlsmPath, { bookVBA: true, cellStyles: true });
        const ws = wb.Sheets['Course'];
        this.extractExcelConfJson(ws);
        return ws;
    }

    public extractExcelConfJson(ws: xlsx.WorkSheet) {
        try {
            if (!this.fs.existsSync(this.pathToSaveDocument + 'config-ws-xlsm.json')) {
                this.fs.writeFileSync(this.pathToSaveDocument + 'config-ws-xlsm.json', JSON.stringify(ws));
            }
        } catch(err) {
            console.error('file ' + 'config-ws-xlsm.json' + ' already exist !: ', err)
        }

        try {
            if (!this.fs.existsSync(this.pathToSaveDocument + 'config-xlsm.json')) {
                const data = xlsx.utils.sheet_to_json(ws);
                this.fs.writeFileSync(this.pathToSaveDocument + 'config-xlsm.json', JSON.stringify(data));
            }
        } catch(err) {
            console.error('file ' + 'config-xlsm.json' + ' already exist !: ', err)
        }
    }

    public writeParticipants(ws: xlsx.WorkSheet, participants: Array<Participant>) {
        let indexPart = this.lineIndexStart;
        for(let participant of participants) {
            // if(!ws["C7"]) {
            //     ws["C7"] = {};
            //     ws["C7"].t = "s";
            //     ws["C7"].v = "issue1124";
            // }
            indexPart++;
        }
    }

    public writeFile(wb: xlsx.WorkBook, dateJour: string, numReunion: number, numCourse: number) {
        const fullPathToFile = this.pathToSaveDocument + dateJour + '/'
        
        try {
            if (!this.fs.existsSync(fullPathToFile)) {
                xlsx.writeFile(wb, dateJour + '/R' + numReunion + 'C' + numCourse + '.xlsm', {bookVBA: true, cellStyles: true});
            }
        } catch(err) {
            console.error('file already exist !: ', err)
        }
    }

}
