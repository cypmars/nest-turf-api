export class CourseDTO {

    heureDepart: number;
    libelle: string;

    numReunion: number;
    dateReunion: number;

    public categorieParticularite: string;
    public categorieStatut: string;
    public conditionAge: string;
    public conditionSexe: string;
    public conditions: string;
    public corde: string;
    public courseTrackee: boolean;
    public discipline: string;
    public distance: number;
    public distanceUnit: string;
    // public ecuries: Array<Ecurie>;
    public epcPourTousParis: boolean;
    public formuleChampLibreIndisponible: boolean;
    public grandPrixNationalTrot: boolean;
    public hasEParis: boolean;
    public libelleCourt: string;
    public nombreDeclaresPartants: number;
    public numCourseDedoublee: number;
    public numExterne: number;
    public numOrdre: number;
    public numSocieteMere: number;
    public parcours: string;
    public pariMultiCourses: boolean;
    public pariSpecial: boolean;
    // public paris: Array<Pari>;
    // public participants: Array<Participant>; // retourné uniquement par le flux participants
    public penetrometre: PenetrometreDTO; // retourné uniquement par le flux course
    public pronosticsExpires: boolean;
    public rapportsDefinitifsDisponibles: boolean; // Quand course finie => appel au ws rapportDefinitif !
    public replayDisponible: boolean; // Quand course finie
    public specialite: string;
    public statut: string; // "FIN_COURSE", "PROGRAMMEE"
    public typePiste: string; // retourné uniquement par le flux course

    // course terminée
    public dureeCourse: number;
    // public photosArrivee: Array<PhotoPMU>;
    // public commentaireApresCourse: CommentairePMU;
    public ordreArrivee: number[][];
    public recompense: RecompenseDTO;
    constructor() { }
}

export class RecompenseDTO {
    public montantOffert1er: number;
    public montantOffert2eme: number;
    public montantOffert3eme: number;
    public montantOffert4eme: number;
    public montantOffert5eme: number;
    // public montantPrix: number;
    public montantTotalOffert: number;

    constructor() {}
}

export class PenetrometreDTO {
    public valeurMesure: string;
    public heureMesure: Date;
    public intitule: string;
    public commentaire: string;

    constructor() { }
}