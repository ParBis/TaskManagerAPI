export class Task{
    constructor(public taskId: number, public task: string, public priority: number, 
        public parentTask: string, public stStartDate: Date, public stEndDate: Date,
        public taskStatus: number){

    }
}