{
   const getProperty =<x, y extends keyof x>(obj:x,key:y)=>{
    return obj[key]

   }

   const person ={ name:'Alice', age:30}

   const res = getProperty(person, 'name');
}