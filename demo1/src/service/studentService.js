const studentList =[
    {
        id: 1,
        name: "chánh1"
    },
    {
        id: 2,
        name: "chánh2"
    }
]

export function getAll(){
    // call api;
    return [...studentList];
}
export function deleteById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break;
        }
    }
}
export function findById(id){
   return  studentList.find((e)=>e.id==id);
}
export function add(student){
    studentList.push(student);
}