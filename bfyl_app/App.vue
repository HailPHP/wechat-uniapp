<script>
	import {
		mapMutations,
		mapActions
	} from 'vuex'
	
	import {socketConnect,appHideSendMessage,appShowSendMessage} from '@/utils/socket.js'
    
	//只操作一次
	let operate_once = false
	
	
	export default {
		onLaunch: function() {
			// 检测新版本
			const updateManager = uni.getUpdateManager()
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					showCancel:false,
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
			/**
			 * 初次加载判断网络情况
			 * 无网络状态下根据实际情况进行调整
			 */
			uni.getNetworkType({
				success: (res) => {
					const networkType = res.networkType
					if (networkType === 'none') {
						this.setConnected(false)
						uni.showToast({
							title: '当前无网络',
							icon: 'loading',
							duration: 2000
						})
					}
				}
			})
			/**
			 * 监听网络状态变化
			 * 可根据业务需求进行调整
			 */
			uni.onNetworkStatusChange((res) => {
				if (!res.isConnected) {
					this.setConnected(false)
					uni.showToast({
						title: '网络已断开',
						icon: 'loading',
						duration: 2000
					})
				} else {
					this.setConnected(true)
					uni.hideToast()
				}
			})
		},
		onShow: function() {
			/* 开屏上报 */
			appShowSendMessage()
			/*连接socket*/
			socketConnect()
			//获取设备信息
			if(!operate_once){
				this.wxlogin().then(function(res){})
				operate_once = true
			}
			//获取广告数据
			this.getAdData()
		},
		onHide: function() {
			 //熄屏上报
			 appHideSendMessage()
		},
		methods: {
			...mapActions({
				wxlogin: 'login/wxlogin',
				getAdData: 'personal/getAdData'
			}),
			...mapMutations({
				setConnected: 'app/setConnected'
			})
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		font-family: PingFangSC, PingFangSC-Medium;
	}
	//公共css
	@import './static/common.scss';
	@import './static/animate.min.scss';
</style>
