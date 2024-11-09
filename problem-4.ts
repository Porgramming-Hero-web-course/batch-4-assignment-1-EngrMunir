{
    type Circle ={
        shape:"circle";
        radius: number;
    }

    type Rectangle ={
        shape:"rectangle";
        width:number;
        height:number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea =(obj:Shape)=>{
        if(obj.shape === "circle"){
            return Math.PI*obj.radius*obj.radius;
        }
        if(obj.shape ==='rectangle'){
            return obj.height*obj.width
        }
    }

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea)

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea)

}