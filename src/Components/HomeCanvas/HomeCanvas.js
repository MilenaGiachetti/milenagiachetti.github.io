import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import Porfolio from '../HomeMesh/HomeMesh';

export default function Model() {
    return(
        <Canvas camera={{position: [3, 2, 12]}} gl={{antialias: true}}>
            <ambientLight intensity={0.6} />
            <spotLight intensity={2} color={0xFFFF99} position={[10, 10, 11]} />
            <Suspense fallback={null}>{<Porfolio />}</Suspense>
        </Canvas>
    )
}