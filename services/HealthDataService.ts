
export type DayData = {
    [key: number]: number;
}

export type WeekData = {
    BeginDate : Date,
    Monday : DayData,
    Tuesday : DayData,
    Wednesday : DayData,
    Thursday : DayData,
    Friday : DayData,
    Saturday : DayData,
    Sunday : DayData
}

export class HealthDataService 
{
    private _age : number;

    public constructor(age : number)    
    {
        this._age = age;
    }

    private GetRandomDayData(min : number, max : number) : DayData{
        let dayData : DayData = {} as DayData;
        for(let i = 0; i < 24; i++){
            dayData[i] = Math.floor(Math.random() * (max - min + 1) + min);
        }
        return dayData;
    }   

    public StepCount(date : Date) : WeekData {
        return {
            BeginDate : date,
            Monday : this.GetRandomDayData(1000, 10000),
            Tuesday : this.GetRandomDayData(1000, 10000),
            Wednesday : this.GetRandomDayData(1000, 10000),
            Thursday : this.GetRandomDayData(1000, 10000),
            Friday : this.GetRandomDayData(1000, 10000),
            Saturday : this.GetRandomDayData(1000, 10000),
            Sunday : this.GetRandomDayData(1000, 10000)
        } as WeekData;
    }

    public HeartRate(date : Date) : WeekData {
        return {
            BeginDate : date,
            Monday : this.GetRandomDayData(60, 100),
            Tuesday : this.GetRandomDayData(60, 100),
            Wednesday : this.GetRandomDayData(60, 100),
            Thursday : this.GetRandomDayData(60, 100),
            Friday : this.GetRandomDayData(60, 100),
            Saturday : this.GetRandomDayData(60, 100),
            Sunday : this.GetRandomDayData(60, 100)
        } as WeekData;
    }

    public Sleep(date : Date) : WeekData {
        return {
            BeginDate : date,
            Monday : this.GetRandomDayData(5, 10),
            Tuesday : this.GetRandomDayData(5, 10),
            Wednesday : this.GetRandomDayData(5, 10),
            Thursday : this.GetRandomDayData(5, 10),
            Friday : this.GetRandomDayData(5, 10),
            Saturday : this.GetRandomDayData(5, 10),
            Sunday : this.GetRandomDayData(5, 10)
        } as WeekData;
    }

    public Calories(date : Date) : WeekData {
        return {
            BeginDate : date,
            Monday : this.GetRandomDayData(1000, 3000),
            Tuesday : this.GetRandomDayData(1000, 3000),
            Wednesday : this.GetRandomDayData(1000, 3000),
            Thursday : this.GetRandomDayData(1000, 3000),
            Friday : this.GetRandomDayData(1000, 3000),
            Saturday : this.GetRandomDayData(1000, 3000),
            Sunday : this.GetRandomDayData(1000, 3000)
        } as WeekData;
    }
}