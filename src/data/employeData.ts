 import aus from "../assets/aus.svg"
 import ind from "../assets/ind.svg"
 import ice from "../assets/ice.svg"
 import leb from "../assets/leb.svg"
 import uk from "../assets/uk.svg"
 import cro from "../assets/cro.svg"

 import worker1 from "../assets/worker1.svg"
 import worker2 from "../assets/worker2.svg"
 import worker3 from "../assets/worker3.svg"
 import worker4 from "../assets/worker4.svg"
 import worker5 from "../assets/worker5.svg"
 import worker6 from "../assets/worker6.svg"
 
 export interface WorkerInfo{
    name:string,
    workerImg:string,
    id:string,
    hireType:string,
    flag:string,
    country:string,
    licenseUse:number,
    status:"draft"|"new hire",
 }


 export const workersData:WorkerInfo[]=[
    {
        name:"Luhutan Imin",
        workerImg:worker1,
        id:"L8RQSC",
        hireType:"Employee",
        flag:aus,
        country:"Australia",
        licenseUse:1,
        status:"draft",
    },
    {
        name:"Robert Fox",
        workerImg:worker2,
        id:"N9KMON",
        hireType:"Global Payroll",
        flag:ind,
        country:"India",
        licenseUse:3,
        status:"new hire",
    },
    {
        name:"Eleanor Pena",
        workerImg:worker3,
        id:"K8LOVN",
        hireType:"Contrctors",
        flag:ice,
        country:"Iceland",
        licenseUse:4,
        status:"new hire",
    },
    {
        name:"Leslie Alexander",
        workerImg:worker4,
        id:"Q7LOWM",
        hireType:"Direct Employees",
        flag:leb,
        country:"Lebanon",
        licenseUse:2,
        status:"draft",
    },
    {
        name:"Devon Lane",
        workerImg:worker5,
        id:"DH5FXE",
        hireType:"Employee",
        flag:uk,
        country:"United Kingdom",
        licenseUse:4,
        status:"new hire",
    },
    {
        name:"Jenny Wilson",
        workerImg:worker6,
        id:"AKXS6T",
        hireType:"Contrctors",
        flag:cro,
        country:"Croatia",
        licenseUse:2,
        status:"new hire",
    },
 ]