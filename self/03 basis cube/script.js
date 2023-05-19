// canvas
const canvas = document.querySelector(".webGL")

// 画面size大小
const sizes={
    width:800,
    height:600
}

//场景
const scene = new THREE.Scene()


//红色方块:
//     1. 结构
//     2. 材质
//     3. mesh结合
//     4. scene中添加方块

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:0xffff00})
const mesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(mesh)

// 摄像机:
//     1. 刚开始摄像机和方块都在原点，所以要移动摄像机才能看见方块
//     2. X轴：右     Y轴：上    Z轴：朝向用户
//     3. scene中添加摄像机

const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,1,1000)
camera.position.z = 3
scene.add(camera)


// 渲染:
//     1. 只有渲染了才能在页面显示cube
//     2. 引入WebGL renderer
//     3. renderer setSize  重新设置宽高
//     4. render渲染

const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)