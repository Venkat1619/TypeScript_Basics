//Protected : it is access only in class and sub class 
class ProtectedExample{
      protected a:number =20;
      protected b:number =30;

      protected display():void{
        console.log(this.a+this.b);
      }
}
class AB extends ProtectedExample{
     public show(): void {
         super.display();
    }

} 

const abObj = new AB();
// if show() is protected then we cannot accessable , so we use it as a public
abObj.show();
