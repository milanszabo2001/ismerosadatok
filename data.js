let ismerosok=[
    {"id":1,
"nev":"Horváth Dávid",
"szuletes":2002,
"kapcsolat":"barát",
"tel":"442-7004"
},
{"id":2,
"nev":"Balázs Dezső",
"szuletes":2005,
"kapcsolat":"barát",
"tel":"805-302"
},
{"id":3,
"nev":"Owen Black",
"szuletes":2004,
"kapcsolat":"család",
"tel":"705-2367"
},
{"id":4,
"nev":"Sejben Dániel",
"szuletes":2003,
"kapcsolat":"család",
"tel":"165-3846"
},
{"id":5,
"nev":"Kreszi Zoltán",
"szuletes":1994,
"kapcsolat":"ismerős",
"tel":"442-7004"
},
]


function render(){
    for(let obj of ismerosok){
        let li = document.createElement("li")
    li.classList.add("d-flex", "justify-content-between")
    li.innerHTML=`<span id="${obj.id}" onclick="reszlet(this)">${obj.nev}</span>`
    let x=`<i id="${obj.id}" onclick="torol(this)" class="fa-solid fa-trash"></i>` 
    li.innerHTML+=x
    document.getElementById('nevjegyzek').appendChild(li)
    }
}
render()

function add(){
    let nev = document.getElementById('nev').value
    let szuletes = document.getElementById('szuletes').value
    let kapcsolat = document.getElementById('kapcsolat').value
    let tel = document.getElementById('tel').value
    let maxId=ismerosok.reduce((m,obj)=>obj.id>m ? obj.id : m , 0)
    console.log(maxId +' maxId')
    let obj={}
    obj.id=maxId+1
    obj.nev=nev
    obj.szuletes=szuletes
    obj.kapcsolat=kapcsolat
    obj.tel=tel
    ismerosok.push(obj)
    document.getElementById('nevjegyzek').innerHTML=''
    render()
    
}

function reszlet(obj){
    console.log(obj.id)
    let tomb = ismerosok.filter(o=>o.id==obj.id)
    console.log(tomb[0])
    document.querySelector('.card-title').innerHTML=tomb[0].nev
    document.querySelector('.card-text').innerHTML=`Telefonszám: ${tomb[0].tel}<br> Születési év: ${tomb[0].szuletes}<br> Kapcsolat: ${tomb[0].kapcsolat}`

}


function torol(obj){
    let id=obj.id
    console.log(id)
    let newArr=ismerosok.filter(obj=>id != obj.id)
    ismerosok=newArr
    document.getElementById('nevjegyzek').innerHTML=''
    render()
}

function torles(){
    ismerosok=[]
    document.getElementById('nevjegyzek').innerHTML=''
    render()
}

