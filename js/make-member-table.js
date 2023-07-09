const memberList = document.getElementById("memberList");

// jsonファイルから情報を取得
async function getMembers() {  
    const response = await fetch(
    "https://bfhzgwe0n8.execute-api.ap-northeast-1.amazonaws.com/dev/home"
    );
    const members = await response.json();
    return members;
}

//  リストアップするmember
async function listMembers(){
    const members = await getMembers();
    members.forEach(addList);
    // for (const mb in members){
    //   addList(mb)
    // }
}

// リストに追加
function addList(member){
    const tr = document.createElement("tr");
    memberList.appendChild(tr);
    const objArray = Object.entries(member);
    objArray.forEach((key) => {
    const td = document.createElement("td");
    td.textContent = key[1];
    tr.appendChild(td);
    });
}

window.addEventListener("load", listMembers);