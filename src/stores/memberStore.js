import { defineStore } from "pinia";
import { ref } from "vue";


export const useMemberStore = defineStore('member',()=>{

    const members = ref([])
    const groups = ref([])

    fetch('http://localhost:30002/members')
    .then((res)=> res.json())
    .then((res)=>members.value = res.data)

    fetch('http://localhost:30002/groups')
    .then((res)=> res.json())
    .then((res)=> groups.value = res.data)

    const load = ()=>{
      setTimeout(() => {
        fetch('http://localhost:30002/members')
        .then((res)=> res.json())
        .then((res)=>members.value = res.data)
      }, 1000);
    }
    const getMember = (id) => {
      const member = members.value.find(member => member.id == id)
      return member
    }
    const getGroupName = (id)=>{
      const group = groups.value.find(group => group.id == id)
      return group.name
    }
    const getMemberIndex = (id) => {
     const index = members.value.findIndex(member => member.id == id)
     return index
    }

  
    const create = (newMember) => {
    
      const member = {...newMember}
      members.value.push(member)
      newMember.group_id = newMember.group_id.toString()
   
      fetch('http://localhost:30002/members',{
        method:'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newMember)
      })
      load()
    }

    
    const update = (index, member)=>{
      members.value[index] = {...member}

      const upMember = {
        name : member.name,
        lastname: member.lastname,
        card: member.card
      }
      
      fetch('http://localhost:30002/members/'+member.id,{
        method:'PUT',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(upMember)
      })
      load() 
    }

    const deleteMember = (id) => {
      const index = getMemberIndex(id)
      members.value.splice(index, 1)

      fetch('http://localhost:30002/members/'+id,{
        method:'DELETE',

        headers:{
            'Content-Type': 'application/json'
        }
      }) 
      load()
    }
    
return{members,groups, getMember, getGroupName, getMemberIndex, create, update, deleteMember}
})     

