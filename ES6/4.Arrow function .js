const sq=function(n)
{
    return n*n;
}

// with parameters
const sq=(n)=> {
    return n*n;
}

// with out parameters
const sq=()=> {
    return n*n;
}
//simple way only a single line

const sq=num=> n*n;

//arr of jobs
const jobs=[
    {id:1,active: true},
    {id:2,active: true},
    {id:3,active: false},
];
//Filter method loop over array and return id if true
//take job obj and pass to function

const jobsactive=jobs.filter(function(job){return jobs.active})
//arrow
const jobsactive=jobs.filter((job)=> jobs.active)