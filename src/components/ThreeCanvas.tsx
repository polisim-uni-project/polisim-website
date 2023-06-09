
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react"
import { MathUtils, Color, Vector3 } from "three";
import { OrthographicCamera } from '@react-three/drei'

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/images/vr_head.gltf");

  const { size } = useThree();
  const canvasWidth = size.width;
  const canvasHeight = size.height;
  const scale = Math.min(canvasWidth, canvasHeight) / 10;

  return (
    <group position={[0, 1.25, 0]} rotation={[0, MathUtils.degToRad(-60), 0]}>
      <primitive object={gltf.scene} scale={scale / 6.5} />
    </group>
  );
};



const CameraHandler = () => {
  const [mousePostionX, setmMousePostionX] = useState(0);
  const [mousePostionY, setmMousePostionY] = useState(0);

  useFrame((state) => {
    const step = 0.1
    state.camera.position.lerp(new Vector3().set(mousePostionX, mousePostionY, 10), step)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      const mouse = {
        x: -(event.clientX / window.innerWidth) * 10,
        y: (event.clientY / window.innerHeight) * 4
      }
      setmMousePostionX(mouse.x)
      setmMousePostionY(mouse.y)
    }

    document.addEventListener('mousemove', handleMouseMove)
  }, [])

  return null;
}


export default function ThreeCanvas() {
  
  return (
    <Box width="50%" height={{ base: "325px", md: "325px", lg: "425px", xl: "550px", '2xl': "650px" }} alignContent="center" right="0" >
      <Canvas style={{ width: "100%", height: "100%", right: "0px"}}>
        <Suspense>

						<ambientLight intensity={0.75} color={new Color(0xa6bcff)}/>
						<spotLight position={[7, 10, 10]} angle={0.325} penumbra={1} />
						<pointLight position={[10, -5, -7]} color={new Color(0xffbfd4)}/>
            <pointLight position={[-10, -5, -7]} color={new Color(0xa6bcff)}/>
						<OrthographicCamera makeDefault position={[0, 0, 10]} zoom={75}>
							{(texture) => (
								<Model/>
							)}
						</OrthographicCamera>
            <CameraHandler/>

        </Suspense>
      </Canvas>
    </Box>
  );
}
