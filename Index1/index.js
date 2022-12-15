let worker = {
    name: 'Neo',
    surname: 'Anderson',
    rate: 100000,
    days:13,

    getSalary(){
        return this.rate * this.days;
    }
    };

    console.log(worker.getSalary());