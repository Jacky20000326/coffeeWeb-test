const Counter = {
    data() {
        return{
            nowPage: "home",
            carts:[{
                name:"Coffee Bean",
                img:"product1.png",
                type: "Bean",
                price: 100,
                number:1,
                id:1,
                cartPng: "cart.png"
                
            },{
                name:"Coffee Bean",
                img:"product2.png",
                type: "Bean",
                price: 150,
                number:1,
                id:2,
                cartPng: "cart.png"
                
            },{
                name:"Coffee Bean",
                img:"product3.png",
                type: "Bean",
                price: 130,
                number:1,
                id:3,
                cartPng: "cart.png"

            }], 
            addList:[]
            
        }
    },
    methods:{
        addProductToList(e){
            let existItem = false
            this.addList.map((item)=>{
                if(item.id === e.id){

                    existItem = true
                   
                    window.alert("已經加入了");
                   
                    return
                }
               
            })
            if(!existItem){
                this.addList.push(e)
                e.cartPng = "check.png"
                
            } 
            
                
                
            
            
        },
        // 切換頁面到cart或是主頁
        changePage(){
            this.nowPage = "cart";
        },
        changehome(){
            this.nowPage = "home";
        },
        deleteList(e){
            this.addList.splice(this.addList.indexOf(e),1);
            e.cartPng = "cart.png"
            // for(var i = 0;i<this.addList.length;i++){
                
            //     if(this.addList[i].id == this.carts.id){
            //         this.carts.cartPng = "cart.png"
            //     }         
            // }
            
            // console.log(this.addList)
        },
        addProductNum(a){
            a.number+=1
                console.log('aaa')
            },
        deleteProductNum(a){
            if(a.number==0){
                a.number=0
            }else{
                a.number-=1
            }
            },
    },
    computed:{
        tottlePrice(){
            return this.addList.map(e=>{
                return e.price*e.number
            }).reduce((tottle,p)=>tottle+p,0)
        }
    }
}
Vue.createApp(Counter).mount('#app')
