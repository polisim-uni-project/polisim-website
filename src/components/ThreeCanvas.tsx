
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react"
import { MathUtils, Color } from "three";
import { OrthographicCamera } from '@react-three/drei'


const Model = () => {
  const gltf = useLoader(GLTFLoader, "/images/LightedVRHead.gltf");
  return (
    <group position={[0, 2, 0]} rotation={[0, MathUtils.degToRad(-60), 0]}>
      <primitive object={gltf.scene} scale={10} />
    </group>
  );
};

export default function ThreeCanvas() {
  return (
    <Box width="50%" height="600px" alignContent="center" right="0" >
      <Canvas style={{ width: "100%", height: "100%", right: "0px"}}>
        <Suspense fallback={null}>

						<ambientLight intensity={0.75} color={new Color(0xa6bcff)}/>
						<spotLight position={[7, 10, 10]} angle={0.325} penumbra={1} />
						<pointLight position={[-10, -5, -7]} color={new Color(0xffbfd4)}/>
						<OrthographicCamera makeDefault position={[0, 0, 10]} zoom={75}>
							{(texture) => (
								<Model />
							)}
						</OrthographicCamera>

        </Suspense>
      </Canvas>
    </Box>
  );
}
