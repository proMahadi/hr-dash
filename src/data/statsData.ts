import stat1 from "../assets/stat1.svg"
import stat2 from "../assets/stat2.svg"
import stat3 from "../assets/stat3.svg"

export interface Stats{
    id:string,
    statof:string,
    icon:string,
    applicantNow?:string,
    applicantPrev?:string,
    invitedNow?:string,
    invitedPrev?:string,
    hiredNow?:string,
    hiredPrev?:string,
    growth:string,
}

export const statsData:Stats[]=[
    {
        id:"1",
        statof:"Total Applied",
        icon:stat1,
        applicantNow:"920",
        applicantPrev:"780",
        growth:"2.68",
    },
    {
        id:"2",
        statof:"Total Invitation",
        icon:stat2,
        invitedNow:"54",
        invitedPrev:"1025",
        growth:"4.87",
    },
    {
        id:"3",
        statof:"Total Invitation",
        icon:stat3,
        hiredNow:"84",
        hiredPrev:"72",
        growth:"9.12%",
    },
]