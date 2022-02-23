<template>
        <div class="container card" style="margin-top:92px; margin-left:296px; padding: 55px; margin-bottom: 60px;  width: -webkit-fill-available">
           <div class="d-flex flex-column mb-4" style="justify-content:center; margin-bottom:10px;">
           <h1 >Sign Up</h1>
           <img :src="authDetails.avatar" class="avatar avatar-sm me-3 mt-3" />
            </div>
        <form class="row g-3">
            <div class="col-md-6">
            <label for="exampleInputEmail1">Personal Id</label>
            <input type="text" class="form-control" placeholder="Username" name="username" v-model="authDetails.id">    
            </div>
            <div class="col-md-6">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" class="form-control" placeholder="Username" name="username" v-model="authDetails.username">    
            </div>
            <div class="col-md-6">
            <label for="exampleInputEmail1">Password</label>
            <input type="password" class="form-control" placeholder="Username" name="username" v-model="authDetails.password">    
            </div>
            <div class="col-md-6">
            <label for="exampleInputEmail1">Confirm Password</label>
            <input type="Cpassword" class="form-control" placeholder="Username" name="username" v-model="authDetails.confirm" autocomplete="true">    
            </div>
            <div class="col-6">
            <button class="btn btn-primary" type="button" v-on:click="Submit">Sign Up</button>
            </div>
           
        </form>
        
        </div>
</template>
<script>
import axios from 'axios';


export default {
    name:'Signup',
    components:{
      
    },
    data(){
        return{
            authDetails:{
                        id:'',
                        username:'',
                        password:'',
                        confirm:'',
                        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XoGpSkgybe5fubd2XlhO_zNXDF9CjbTrEw&usqp=CAU'
            }  
        }
    },
    methods: {
        async Submit(){
            //testing submit function before submitting to the server
            console.log("Before submit",this.authDetails);
            const result =await axios.post("http://localhost:3000/auth",{
                id:this.authDetails.id,
                username:this.authDetails.username,
                password:this.authDetails.password,
                confirm:this.authDetails.confirm,
                avatar:this.authDetails.avatar
            })

            console.log("Entered Signup details",this.authDetails)
            
            if(result.status === 201){
                alert("Successfully Registered",this.authDetails.username)
                    this.$router.push('/home/list')
            }
            localStorage.setItem('userDetails',JSON.stringify(result.data))
            console.log("After Submitting Signup details",result)
            }    
    }
    // ,
    // mounted(){
    //     let user = localStorage.getItem('userDetails')
    //     if(user){
    //             this.$router.push('/home')
    //     }
    // }
}
</script>
<style scoped>

.container {
  border-radius: 10px;
  
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-right: 6px;
  margin-left: 296px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style> 