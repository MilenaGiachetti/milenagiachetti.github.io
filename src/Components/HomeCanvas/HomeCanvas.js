import {Canvas} from '@react-three/fiber';
// import HomeMesh from './HomeMesh/HomeMesh';
// import { EffectComposer,Noise } from '@react-three/postprocessing';

export default function Model() {
    return(
        <Canvas orthographic camera={{zoom: 50, position: [0, 0, 25], near: 1}} gl={{antialias: true}}>
            <ambientLight intensity={0.2} />
            <spotLight intensity={0.1} color={0xFFFF99} position={[10, 10, 30]} />
            <spotLight intensity={0.5} color={0x1C7293} position={[-10, -10, 10]} />
            {/* <Suspense fallback={null}>{<HomeMesh />}</Suspense> */}
            <mesh visible userData={{ hello: 'world' }} position={[12, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[8, 3, 18]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[2.3, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[-12, 5, -3]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[7, -3, 5]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[-10, -8, 4]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[-8, 4, -2]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[9, -8, 10]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            <mesh visible userData={{ hello: 'world' }} position={[-7, -3, 5]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="0xe4e6eb" />
            </mesh>
            {/* <EffectComposer>
                <Noise opacity={0.3} />
            </EffectComposer> */}
        </Canvas>
    )
}