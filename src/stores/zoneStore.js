import { defineStore } from "pinia";
import { ref } from "vue";


export const useZoneStore = defineStore('zone',()=>{

    const zones = ref([])
    

    fetch('http://localhost:30002/zones')
    .then((res)=> res.json())
    .then((res)=>zones.value = res.data)


    const load = ()=>{
      setTimeout(() => {
        fetch('http://localhost:30002/zones')
        .then((res)=> res.json())
        .then((res)=>zones.value = res.data)
      }, 1000);
    }
    const getZone = (id) => {
      const zone = zones.value.find(zone => zone.id == id)
      return zone
    }

    const getZoneIndex = (id) => {
     const index = zones.value.findIndex(zone => zone.id == id)
     return index
    }

  
    const create = (newzone) => {
      const zone = {...newzone}
      zones.value.push(zone)
        
      fetch('http://localhost:30002/zones',{
        method:'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newzone)
      })
      load()
    }

    
    const update = (index, zone)=>{
      zones.value[index] = {...zone}

      const upZone = {
        name : zone.name,
      }

      fetch('http://localhost:30002/zones/'+zone.id,{
        method:'PUT',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(upZone)
      })
      load()
    }

    const deleteZone = (id) => {
      const index = getZoneIndex(id)
      zones.value.splice(index, 1)

      fetch('http://localhost:30002/zones/'+id,{
        method:'DELETE',

        headers:{
            'Content-Type': 'application/json'
        }
      }) 
      load()
    }
     
return{zones, getZone, getZoneIndex, create, update, deleteZone}
})     

