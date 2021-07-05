import classes from './ProjectCanvas.module.scss';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import ProjectMesh from './ProjectMesh/ProjectMesh';

export default function ProjectCanvas(props) {
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
        <spotLight intensity={0.8} color={0x00ff00} position={[3, 3, 4]} />
        <Suspense fallback={null}>{<ProjectMesh image={props.otherProyect} fading={props.otherProyectFading}/>}</Suspense>
    </Canvas>
    )
}