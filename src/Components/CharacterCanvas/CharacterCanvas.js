import classes from './CharacterCanvas.module.scss';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import CharacterMesh from './CharacterMesh/CharacterMesh';

export default function CharacterCanvas(props) {
    return(
        <Canvas 
        gl={{ antialias: true }} 
        className={classes.Canvas}
        orthographic
        camera={{
            position: [0,0,1],
            zoom: 70
        }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} color={0xffffff} position={[3, 3, 8]} />
        <Suspense fallback={null}>{<CharacterMesh/>}</Suspense>
    </Canvas>
    )
}