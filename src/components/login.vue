<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<p>后台管理系统</p>
		  		</div>
		    	<el-form>
					<el-form-item>
						<el-input v-model="username" placeholder="用户名"></el-input>
					</el-form-item>
					<br>
					<el-form-item>
						<el-input v-model="password" type="password" placeholder="密码"></el-input>
					</el-form-item>
					<br>
					<el-form-item>
				    	<el-button @click="go" type="primary" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
import {messageBox,notification,ConfigBox} from '../API/Toast'
	export default {
	    data(){
			return {
				username: '',
				password: '',
				showLogin: false,
			}
        },
        methods:{
            go(){
				this.$axios.post('https://bang.zhengsj.top/login/admin',{
					adminName: this.username,
					password: this.password
				}).then(res => {
					console.log(res);
					sessionStorage.removeItem('cookie')
					sessionStorage.setItem('cookie',res.data.data.token)
					let bool = res.data.data.admin.adminRole == "ROLE_ADMIN_1"
					sessionStorage.setItem('isBoos',bool)
					if(!bool){
						sessionStorage.setItem('schoolId',res.data.data.admin.adminSchoolId)
					}
					if(res.status == 200) {
						this.$router.push('/statistical')
					}
				})
				.catch((err)=>{
					if(typeof(err) != String)
						err = '登陆失败'
					else
						err = err || "发生了错误，可能是网络异常，请稍后重试"
					this.$message.error(err);
				})
            }
        }
	}
</script>

<style scoped>
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;

	}
    .manage_tip p{
        font-size: 34px;
        color: #fff;
	}
	.form_contianer{
        margin-left: 30vw;
        margin-right: 30vw;
        margin-top: 150px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
	}
    
    .submit_btn{
        width: 100%;
        font-size: 16px;
    }
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
