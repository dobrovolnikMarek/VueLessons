export default {
    data(){
        return{
          names: ["Max", "Tom", "Adam"],
          searchName: ""
        }
      },
      computed:{
        filteredNames() {
          return this.names.filter((name)=>{
            return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 
          })
        }
      }
}