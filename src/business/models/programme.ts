export class PmuApiBean {
    public programme: Programme;
    public timestampPMU: TimestampPMU;

    constructor(data) {
        this.programme = data.programme ? new Programme(data.programme) : null;
        this.timestampPMU = data.timestampPMU ?
            new TimestampPMU(data.timestampPMU) : null;
    }
}
export class TimestampPMU {
    public timestamp: number;
    public timezoneOffset: number;
    constructor(data) {
        this.timestamp = data.timestamp;
        this.timezoneOffset = data.timezoneOffset;
    }
}

export class Programme {
    public date: Date;
    public dateProgrammeActif: Date;
    public datesProgrammesDisponibles: Array<string>;
    public reunions: Array<Reunion>;
    public timezoneOffset: number;

    constructor(data) {
        this.date = data.date ? new Date(data.date) : null;
        this.dateProgrammeActif = data.dateProgrammeActif ? new Date(data.dateProgrammeActif) : null;

        this.datesProgrammesDisponibles = new Array();
        if (data.datesProgrammesDisponibles) {
            for (const date of data.datesProgrammesDisponibles) {
                this.datesProgrammesDisponibles.push(date);
            }
        }

        this.reunions = new Array();
        if (data.reunions) {
            for (const reunion of data.reunions) {
                this.reunions.push(new Reunion(reunion));
            }
        }

        this.timezoneOffset = data.timezoneOffset;
    }
}

export class Reunion {
    public audience: string;
    public cached: boolean;
    public cagnottes: Array<Cagnotte>;
    public courses: Array<Course>;
    public dateReunion: Date;
    public derniereReunion: boolean;
    public disciplinesMere: Array<string>;
    public hippodrome: HippodromeReunion;
    public meteo: Meteo;
    public nature: string;
    public numExterne: number;
    public numOfficiel: number;
    public numOfficielReunionPrecedente: number;
    public numOfficielReunionSuivante: number;
    public offresInternet: boolean;
    public parisEvenement: Array<PariEvenement>;
    public pays: Pays;
    public prochaineCourse: number;
    public reportPlusFpaMax: number;
    public specialites: Array<string>;
    public statut: string;
    public timezoneOffset: number;

    constructor(data) {
        this.audience = data.audience;
        this.cached = data.cached;

        this.cagnottes = new Array();
        if (data.cagnottes) {
            for (const cagnotte of data.cagnottes) {
                this.cagnottes.push(new Cagnotte(cagnotte));
            }
        }

        this.courses = new Array();
        if (data.courses) {
            for (const course of data.courses) {
                this.courses.push(new Course(course));
            }
        }

        this.dateReunion = data.dateReunion ? data.dateReunion : null;
        this.derniereReunion = data.derniereReunion;

        this.disciplinesMere = new Array();
        if (data.disciplinesMere) {
            for (const discipline of this.disciplinesMere) {
                this.disciplinesMere.push(discipline);
            }
        }

        this.hippodrome = data.hippodrome ? new HippodromeReunion(data.hippodrome) : null;
        this.meteo = data.meteo ? new Meteo(data.meteo) : null;
        this.nature = data.nature;
        this.numExterne = data.numExterne;
        this.numOfficiel = data.numOfficiel;
        this.numOfficielReunionPrecedente = data.numOfficielReunionPrecedente;
        this.numOfficielReunionSuivante = data.numOfficielReunionSuivante;
        this.offresInternet = data.offresInternet;

        this.parisEvenement = new Array();
        if (data.parisEvenement) {
            for (const pari of data.parisEvenement) {
                this.parisEvenement.push(new PariEvenement(pari));
            }
        }

        this.pays = data.pays ? new Pays(data.pays) : null;
        this.prochaineCourse = data.prochaineCourse;
        this.reportPlusFpaMax = data.reportPlusFpaMax;

        this.specialites = new Array();
        if (data.specialites) {
            for (const specialite of data.specialites) {
                this.specialites.push(specialite);
            }
        }

        this.statut = data.statut;
        this.timezoneOffset = data.timezoneOffset;
    }
}

export class Cagnotte {
    public cagnotteInternet: boolean;
    public montant: number;
    public numCourse: number;
    public typePari: string;

    constructor(data) {
        this.cagnotteInternet = data.cagnotteInternet;
        this.montant = data.montant;
        this.numCourse = data.numCourse;
        this.typePari = data.typePari;
    }
}

export class Course {
    public cached: boolean;
    public cagnottes: Array<Cagnotte>;
    public categorieParticularite: string;
    public categorieStatut: string;
    public conditionAge: string;
    public conditionSexe: string;
    public conditions: string;
    public courseTrackee: boolean;
    public departImminent: boolean;
    public discipline: string;
    public distance: number;
    public distanceUnit: string;
    // public ecuries: Array<Ecurie>;
    public epcPourTousParis: boolean;
    public formuleChampLibreIndisponible: boolean;
    public grandPrixNationalTrot: boolean;
    public hasEParis: boolean;
    public heureDepart: Date;
    public hippodrome: HippodromeCourse;
    public isDepartAJPlusUn: boolean;
    public isDepartImminent: boolean;
    public libelle: string;
    public libelleCourt: string;
    public montantOffert1er: number;
    public montantOffert2eme: number;
    public montantOffert3eme: number;
    public montantOffert4eme: number;
    public montantOffert5eme: number;
    public montantPrix: number;
    public montantTotalOffert: number;
    public nombreDeclaresPartants: number;
    public numCourseDedoublee: number;
    public numExterne: number;
    public numOrdre: number;
    public numReunion: number;
    public numSocieteMere: number;
    public parcours: string;
    public pariMultiCourses: boolean;
    public pariSpecial: boolean;
    public paris: Array<Pari>;
    public participants: Array<Participant>; // retourné uniquement par le flux participants
    public penetrometre: Penetrometre; // retourné uniquement par le flux course
    public pronosticsExpires: boolean;
    public rapportsDefinitifsDisponibles: boolean; // Quand course finie => appel au ws rapportDefinitif !
    public replayDisponible: boolean; // Quand course finie
    public specialite: string;
    public statut: string; // "FIN_COURSE", "PROGRAMMEE"
    public typePiste: string; // retourné uniquement par le flux course
    public timezoneOffset: number;

    // course terminée
    public dureeCourse: number;
    public photosArrivee: Array<PhotoPMU>;
    public commentaireApresCourse: CommentairePMU;
    public ordreArrivee: Array<number>;

    constructor(data) {
        this.cached = data.cached;

        this.cagnottes = new Array<Cagnotte>();
        if (data.cagnottes) {
            for (const cagnotte of data.cagnottes) {
                this.cagnottes.push(new Cagnotte(cagnotte));
            }
        }

        this.categorieParticularite = data.categorieParticularite;
        this.categorieStatut = data.categorieStatut;
        this.conditionAge = data.conditionAge;
        this.conditionSexe = data.conditionSexe;
        this.conditions = data.conditions;
        this.courseTrackee = data.courseTrackee;
        this.departImminent = data.departImminent;
        this.discipline = data.discipline;
        this.distance = data.distance;
        this.distanceUnit = data.distanceUnit;

        // this.ecuries = new Array<Ecurie>();
        // if (data.ecuries) {
        //     for (const ecurie of data.ecuries) {
        //         this.ecuries.push(new Ecurie(ecurie));
        //     }
        // }

        this.epcPourTousParis = data.epcPourTousParis;
        this.formuleChampLibreIndisponible = data.formuleChampLibreIndisponible;
        this.grandPrixNationalTrot = data.grandPrixNationalTrot;
        this.hasEParis = data.hasEParis;
        this.heureDepart = data.heureDepart;
        this.hippodrome = data.hippodrome ? new HippodromeCourse(data.hippodrome) : null;
        this.isDepartAJPlusUn = data.isDepartAJPlusUn;
        this.isDepartImminent = data.isDepartImminent;
        this.libelle = data.libelle;
        this.libelleCourt = data.libelleCourt;
        this.montantOffert1er = data.montantOffert1er;
        this.montantOffert2eme = data.montantOffert2eme;
        this.montantOffert3eme = data.montantOffert3eme;
        this.montantOffert4eme = data.montantOffert4eme;
        this.montantOffert5eme = data.montantOffert5eme;
        this.montantPrix = data.montantPrix;
        this.montantTotalOffert = data.montantTotalOffert;
        this.nombreDeclaresPartants = data.nombreDeclaresPartants;
        this.numCourseDedoublee = data.numCourseDedoublee;
        this.numExterne = data.numExterne;
        this.numOrdre = data.numOrdre;
        this.numReunion = data.numReunion;
        this.numSocieteMere = data.numSocieteMere;
        this.parcours = data.parcours;
        this.pariMultiCourses = data.pariMultiCourses;
        this.pariSpecial = data.pariSpecial;

        this.paris = new Array<Pari>();
        if (data.paris) {
            for (const pari of data.paris) {
                this.paris.push(new Pari(pari));
            }
        }

        this.participants = new Array<Participant>();
        if (data.participants) {
            for (const participant of data.participants) {
                this.participants.push(new Participant(participant));
            }
        }

        this.penetrometre = data.penetrometre ? new Penetrometre(data.penetrometre) : null;
        this.pronosticsExpires = data.pronosticsExpires;
        this.rapportsDefinitifsDisponibles = data.rapportsDefinitifsDisponibles;
        this.replayDisponible = data.replayDisponible;
        this.specialite = data.specialite;
        this.statut = data.statut;
        this.typePiste = data.typePiste;
        this.timezoneOffset = data.timezoneOffset;

        // Course terminée
        this.dureeCourse = data.dureeCourse;

        this.photosArrivee = new Array();
        if (data.photosArrivee) {
            for (const photo of data.photosArrivee) {
                this.photosArrivee.push(new PhotoPMU(photo));
            }
        }

        this.commentaireApresCourse = data.commentaireApresCourse ? new CommentairePMU(data.commentaireApresCourse) : null;
        this.ordreArrivee = new Array();
        if (data.ordreArrivee) {
            for (const ordres of data.ordreArrivee) {
                for (const ordre of ordres) {
                    this.ordreArrivee.push(ordre);
                }
            }
        }
    }
}

export class Ecurie {
    public nom: string;

    constructor(data) {
        this.nom = data.nom;
    }
}
export class HippodromeCourse {
    public codeHippodrome: string;
    public libelleCourt: string;
    public libelleLong: string;

    constructor(data) {
        this.codeHippodrome = data.codeHippodrome;
        this.libelleCourt = data.libelleCourt;
        this.libelleLong = data.libelleLong;
    }
}

export class Pari {
    public audience: string;
    public codePari: string;
    public combine: boolean;
    public complement: boolean;
    public enVente: boolean;
    public infosJackpot: Jackpot;
    public miseBase: number;
    public nbChevauxReglementaire: number;
    public ordre: boolean;
    public reportable: boolean;
    public spotAutorise: boolean;
    public typePari: string;

    // Optionnels
    public valeursFlexiAutorisees?: Array<number>;
    public valeursRisqueAutorisees?: Array<number>;
    constructor(data) {
        this.audience = data.audience;
        this.codePari = data.codePari;
        this.combine = data.combine;
        this.complement = data.complement;
        this.enVente = data.enVente;
        this.infosJackpot = data.infosJackpot ? new Jackpot(data.infosJackpot) : null;
        this.miseBase = data.miseBase;
        this.nbChevauxReglementaire = data.nbChevauxReglementaire;
        this.ordre = data.ordre;
        this.reportable = data.reportable;
        this.spotAutorise = data.spotAutorise;
        this.typePari = data.typePari;

        this.valeursFlexiAutorisees = new Array<number>();
        if (data.valeursFlexiAutorisees) {
            for (const valeur of data.valeursFlexiAutorisees) {
                this.valeursFlexiAutorisees.push(valeur);
            }
        }
    }

}

export class Jackpot {
    public miseBase: number;
    public tauxContribution: number;

    constructor(data) {
        this.miseBase = data.miseBase;
        this.tauxContribution = data.tauxContribution;
    }
}

export class ParticipantsPMU {
    public participants: Array<Participant>;
    public ecuries: Array<Ecurie>;
    public spriteCasaques: Array<PhotoPMU>;

    constructor(data) {
        this.participants = new Array();
        if (data.participants) {
            for (const participant of data.participants) {
                this.participants.push(new Participant(data.participant));
            }
        }

        this.ecuries = new Array();
        if (data.ecuries) {
            for (const ecurie of data.ecuries) {
                this.ecuries.push(new Ecurie(ecurie));
            }
        }

        this.spriteCasaques = new Array();
        if (data.spriteCasaques) {
            for (const sprite of data.spriteCasaques) {
                this.spriteCasaques.push(new PhotoPMU(sprite));
            }
        }
    }
}

export class Participant {
    public age: number;
    public allure: string;
    public deferre: string;
    public dernierRapportDirect: Rapport;
    public dernierRapportReference: Rapport;
    public driver: string;
    public driverChange: boolean;
    public eleveur: string;
    public engagement: boolean;
    public entraineur: string;
    public ecurie: string;
    public gainsParticipant: GainsParticipant;
    public handicapPoids: number;
    public handicapDistance: number;
    public indicateurInedit: boolean;
    public jumentPleine: boolean;
    public musique: string;
    public nom: string;
    public nomMere: string;
    public nomPere: string;
    public nomPereMere: string;
    public nombreCourses: number;
    public nombrePlaces: number;
    public nombreVictoires: number;
    public nombrePlacesSecond: number;
    public nombrePlacesTroisieme: number;
    public numPmu: number;
    public oeilleres: string;
    public placeCorde: number;
    public poidsConditionMonteChange: boolean;
    public proprietaire: string;
    public race: string;
    public reductionKilometrique: number;
    public robe: Robe;
    public sexe: string;
    public statut: string;
    public supplement: number;
    public urlCasaque: string;

    // course terminée
    public commentaireApresCourse: CommentairePMU;
    public incident: string;
    public tempsObtenu: number;
    public ordreArrivee: number;

    constructor(data) {
        this.age = data.age;
        this.allure = data.allure;
        this.dernierRapportDirect = data.dernierRapportDirect ? new Rapport(this.dernierRapportDirect) : null;
        this.dernierRapportReference = data.dernierRapportReference ? new Rapport(this.dernierRapportReference) : null;
        this.driver = data.driver;
        this.driverChange = data.driverChange;
        this.eleveur = data.eleveur;
        this.engagement = data.engagement;
        this.entraineur = data.entraineur;
        this.ecurie = data.ecurie;
        this.gainsParticipant = data.gainsParticipant ? new GainsParticipant(data.gainsParticipant) : null;
        this.handicapPoids = data.handicapPoids;
        this.indicateurInedit = data.indicateurInedit;
        this.jumentPleine = data.jumentPleine;
        this.musique = data.musique;
        this.nom = data.nom;
        this.nomMere = data.nomMere;
        this.nomPere = data.nomPere;
        this.nomPereMere = data.nomPereMere;
        this.nombreCourses = data.nombreCourses;
        this.nombrePlaces = data.nombrePlaces;
        this.nombreVictoires = data.nombreVictoires;
        this.nombrePlacesSecond = data.nombrePlacesSecond;
        this.nombrePlacesTroisieme = data.nombrePlacesTroisieme;
        this.numPmu = data.numPmu;
        this.oeilleres = data.oeilleres;
        this.placeCorde = data.placeCorde;
        this.poidsConditionMonteChange = data.poidsConditionMonteChange;
        this.proprietaire = data.proprietaire;
        this.race = data.race;
        this.robe = data.robe ? new Robe(data.robe) : null;
        this.sexe = data.sexe;
        this.statut = data.statut;
        this.supplement = data.supplement;
        this.urlCasaque = data.urlCasaque;

        // course terminée
        this.commentaireApresCourse = data.commentaireApresCourse ? new CommentairePMU(data.commentaireApresCourse) : null;
        this.incident = data.incident;
        this.tempsObtenu = data.tempsObtenu;
        this.ordreArrivee = data.ordreArrivee;
    }
}

export class Rapport {
    public dateRapport: Date;
    public favoris: boolean;
    public grossePrise: boolean;
    public indicateurTendance: string;
    public nombreIndicateurTendance: number;
    public numPmu1: number;
    public permutation: number;
    public rapport: number;
    public typePari: string;
    public typeRapport: string;

    constructor(data) {
        this.dateRapport = data.dateRapport ? new Date(data.dateRapport) : null;
        this.favoris = data.favoris;
        this.grossePrise = data.grossePrise;
        this.indicateurTendance = data.indicateurTendance;
        this.nombreIndicateurTendance = data.indicateurTendance;
        this.numPmu1 = data.numPmu1;
        this.permutation = data.permutation;
        this.rapport = data.rapport;
        this.typePari = data.typePari;
    }
}

export class GainsParticipant {
    public gainsAnneEnCours: number;
    public gainsAnneePrecedente: number;
    public gainsCarriere: number;
    public gainsPlace: number;
    public gainsVictoire: number;

    constructor(data) {
        this.gainsAnneEnCours = data.gainsAnneEnCours;
        this.gainsAnneePrecedente = data.gainsAnneePrecedente;
        this.gainsCarriere = data.gainsCarriere;
        this.gainsPlace = data.gainsPlace;
        this.gainsVictoire = data.gainsVictoire;
    }
}

export class Robe {
    public code: string;
    public libelleCourt: string;
    public libelleLong: string;
    constructor(data) {
        this.code = data.code;
        this.libelleCourt = data.libelleCourt;
        this.libelleLong = data.libelleLong;
    }
}

export class Penetrometre {
    public valeurMesure: string;
    public heureMesure: Date;
    public intitule: string;
    public commentaire: string;

    constructor(data) {
        this.valeurMesure = data.valeurMesure;
        this.heureMesure = data.heureMesure ? new Date(data.heureMesure) : null;
        this.intitule = data.intitule;
        this.commentaire = data.commentaire;
    }
}

export class HippodromeReunion {
    public code: string;
    public libelleCourt: string;
    public libelleLong: string;

    constructor(data) {
        this.code = data.code;
        this.libelleCourt = data.libelleCourt;
        this.libelleLong = data.libelleLong;
    }
}

export class Meteo {
    public datePrevision: Date;
    public directionVent: string;
    public forceVent: number;
    public nebulositeCode: string;
    public nebulositeLibelleCourt: string;
    public nebulositeLibelleLong: string;
    public temperature: number;

    constructor(data) {
        this.datePrevision = data.datePrevision ? data.datePrevision : null;
        this.directionVent = data.directionVent;
        this.forceVent = data.forceVent;
        this.nebulositeCode = data.nebulositeCode;
        this.nebulositeLibelleCourt = data.nebulositeLibelleCourt;
        this.nebulositeLibelleLong = data.nebulositeLibelleLong;
        this.temperature = data.temperature;
    }

}

export class PariEvenement {
    public codePari: string;
    public course: CourseRef;

    constructor(data) {
        this.codePari = data.codePari;
        this.course = data.course ? new CourseRef(data.course) : null;
    }
}

export class CourseRef {
    public dateProgramme: Date;
    public numOrdre: number;
    public numReunion: number;

    constructor(data) {
        this.dateProgramme = data.dateProgramme ? new Date(data.dateProgramme) : null;
        this.numOrdre = data.numOrdre;
        this.numReunion = data.numReunion;
    }
}

export class Pays {
    public code: string;
    public libelle: string;

    constructor(data) {
        this.code = data.code;
        this.libelle = data.libelle;
    }
}

export class PhotoPMU {
    // utilisé pour:
    //  1. le champ photoArrivee de Course
    //  2. le champ spriteCasaques de ParticipantsPMU

    public heightSize: number;
    public widthSize: number; // pas défini pour 2.
    public url: string;
    public originalSize: boolean;

    constructor(data) {
        this.heightSize = data.heightSize;
        this.widthSize = data.widthSize;
        this.url = data.url;
        this.originalSize = data.url;
    }
}

export class CommentairePMU {
    public texte: string;
    public source: string;

    constructor(data) {
        this.texte = data.texte;
        this.source = data.source;
    }
}
