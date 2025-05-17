import { defineStore } from "pinia";
import { ref } from "vue";


export const useGroupStore = defineStore('group',()=>{

    const groups = ref([])
    const zones = ref([])

    fetch('http://localhost:30002/groups')
    .then((res)=> res.json())
    .then((res)=>groups.value = res.data)

    fetch('http://localhost:30002/zones')
    .then((res)=> res.json())
    .then((res)=> zones.value = res.data)

    const load = ()=>{
      setTimeout(() => {
        fetch('http://localhost:30002/groups')
        .then((res)=> res.json())
        .then((res)=>groups.value = res.data)
      }, 1000);
    }
    const getGroup = (id) => {
      const group = groups.value.find(group => group.id == id)
      return group
    }

    const getZoneName = (id) => {
      const zone = zones.value.find(zone => zone.id == id)
      
     if(zone) return zone.name
    }



    const getGroupIndex = (id) => {
     const index = groups.value.findIndex(group => group.id == id)
     return index
    }

  
    const create = (newGroup) => {
      const group = {...newGroup}
      groups.value.push(group)
      newGroup.zone_id = newGroup.zone_id.toString()
   
      fetch('http://localhost:30002/groups',{
        method:'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newGroup)
      })
      load()
    }

    
    const update = (index, group)=>{
      groups.value[index] = {...group}

      const upGroup = {
        name : group.name,
        address: group.address,
        zone_id: group.zone_id
      }
      upGroup.zone_id = upGroup.zone_id.toString()
      
      fetch('http://localhost:30002/groups/'+group.id,{
        method:'PUT',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(upGroup)
      })
      load()
    }

    const deleteGroup = (id) => {
      const index = getGroupIndex(id)
      groups.value.splice(index, 1)

      fetch('http://localhost:30002/groups/'+id,{
        method:'DELETE',

        headers:{
            'Content-Type': 'application/json'
        }
      }) 
      load()
    }
     
return{groups, zones, getGroup, getGroupIndex, getZoneName, create, update, deleteGroup}
})     

