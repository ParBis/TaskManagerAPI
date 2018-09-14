export class Employee{
    constructor(public taskId: number, public task: string, public priority: number, 
        public parentTask: string, public stStartDate: string, public stEndDate: string){

    }
}