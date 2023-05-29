let instance : DatabaseService;

type Medico = {
    id: number,
    nome: string,
    especialidade: string,
    contacto: string,
}

type Consulta = {
    id: number,
    data: Date,
    medico: string,
    hospital: string,
    especialidade: string,
}

export default class DatabaseService {
    public medicos: Medico[] = [{
        id: 1,
        nome: "Dr. João",
        especialidade: "Cardiologia",
        contacto: "912345678"
    },
    {
        id: 2,
        nome: "Dr. António",
        especialidade: "Ortopedia",
        contacto: "912345678"
    },
    ];
    public consultas: Consulta[] = [];

    public static getInstance() {
        console.log(instance != null ? "DatabaseService já instanciado" : "DatabaseService não instanciado");
        if (!instance) {
            instance = new DatabaseService();
        }
        return instance;
    }

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    public addMedico(medico: Medico) {
        this.medicos.push(medico);
    }

    public addConsulta(consulta: Consulta) {
        this.consultas.push(consulta);
    }
}