<template>
	<div id="login" class="wrap">
		<div class="wrapInner">
			<nav>
				<span :class="{active:isActive}" @click="changeType">登入</span>
				<span :class="{active:!isActive}" @click="changeType">注册</span>
			</nav>
			<img src="../assets/img/login.svg" width="80%" alt="">
			<form action="">
				<input class="inputStyle" type="text" placeholder="用户名" v-model="username">
				<input class="inputStyle" type="password" placeholder="密码" v-model="password">
				<button class="buttonStyle" v-show="isActive" @click="login">登入</button>
				<button class="buttonStyle" v-show="!isActive" @click="register">注册</button>
			</form>
		</div>
	</div>
</template>
<script>
import qs from 'qs'
	export default {
		data () {
			return {
				isActive:true,
				username: '',
				password: ''
			}
		},
		mounted () {

		},
		created () {
			//this.$MessageBox('提示', '操作成功');
		},
		methods:{
			changeType () {
				this.username = ''
				this.password = ''
				this.isActive = !this.isActive
			},
			login () {
				//console.log(this.$axios)
				if(!this.username.trim()){
					alert('请输入用户名')
					return
				}else if(!this.password.trim()){
					alert('请输入密码')
					return
				}
				this.$axios.post('/api/login',
					qs.stringify({
						username: this.username,
						password: this.password
					})
				).then(res => {
					if(res.data.code == 200) {
						if(res.data.data.isLogin){
							this.$router.push({'name':'message'})
						}
					}
				})
			},
			register () {
				if(!this.username.trim()){
					alert('请输入用户名')
					return
				}else if(!this.password.trim()){
					alert('请输入密码')
					return
				}
				this.$axios.post('/api/register',
					qs.stringify({
						username: this.username,
						password: this.password
					})
				).then(res => {
					console.log(res)
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.wrap{
		height: 100vh;
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		align-items: center;
		.wrapInner{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 80%;
			height: 800px;
			border-radius: 20px 20px;
			box-shadow: 0 40px 80px rgba(0,0,0,.3);
			padding: 40px 20px;
			box-sizing: border-box;
		}

		nav{
			display: flex;
			justify-content: center;
			align-items: center;
			span{
				display: inline-block;
				width: 100px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 32px;
				font-weight: 600;
				color: #ccc;
			}
			span.active{
				color: #39ace7;
			}
		}
		form{
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			padding: 20px 10px ;
			.inputStyle{
				height: 70px;
				line-height: 70px;
				width: 90%;
				margin-bottom: 70px;
				text-align: center;
				border: 1px solid #f6f6f6;
				border-radius: 15px;
				background-color: #f6f6f6;
			}
			.buttonStyle{
				background-color: #39ace7;
				width: 200px;
				height: 70px;
				line-height: 70px;
				border: none;
				color: #fff;
				border-radius: 10px;
			}
		}
	}
</style>