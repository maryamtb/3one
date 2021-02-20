import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Stars, Sky, TrackballControls, Box } from "drei";

const App = (props) => {
//   const mesh = useRef();
//   const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  //   useFrame(() => {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  //   });
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, -11], fov: 25 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Box onClick={(event) => setActive(!active)}>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>

        {/* <mesh
          {...props}
          ref={mesh}
          scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
          onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh> */}

        <Sky
          distance={4500} // Camera distance (default=450000)
          sunPosition={[0, 0, 0.5]} // Sun position normal (defaults to inclination and azimuth if not set)
          inclination={0} // Sun elevation angle from 0 to 1 (default=0)
          azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
          {...props} // All three/examples/jsm/objects/Sky props are valid
        />
        <Stars />

        <TrackballControls />
      </Canvas>
    </>
  );
};

export default App;
