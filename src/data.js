 export const API_KEY = 'AIzaSyB_O4hGwyagZZcwb0ALI_-V_tJzml7I81k';

 export const value_converter = (value) =>{
       if(value>=1000000)
       {
          return Math.floor(value/1000000)+"M";
       }
       else if(value>=1000)
       {
        return Math.floor(value/1000)+"k";
       }
       else{
          return value ;
       }
 }