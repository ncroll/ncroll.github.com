(function(PresentationDemo) {

   function init1() { 
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var geometry = new THREE.SphereGeometry(180, 8, 6, 0);
      var material = new THREE.MeshBasicMaterial({ 
	      wireframe: true,
	      color: 0xff2400
      });
      var mesh = new THREE.Mesh(geometry, material);

      var scene = new THREE.Scene();
      scene.add(mesh);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);
      renderer.render(scene, camera);
      document.getElementById('demo1').appendChild(renderer.domElement);
   }
   
   function init2 () { 
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var geometry = new THREE.SphereGeometry(180, 8, 6, 0);
      var material = new THREE.MeshPhongMaterial({ 
	      emissive: 0xff2400,
	      specular: 0xfc2847,
	      shininess: 40
      });
      var mesh = new THREE.Mesh(geometry, material);

      var scene = new THREE.Scene();
      scene.add(mesh);

      var light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.position.set(0, 1, 1);
      scene.add(light);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);
      renderer.render(scene, camera);
      document.getElementById('demo2').appendChild(renderer.domElement);
   }

   function init3() { 
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var geometry = new THREE.TorusKnotGeometry(180, 40, 8);
      var material = new THREE.MeshPhongMaterial({ 
	      emissive: 0xff2400,
	      specular: 0xfc2847,
	      shininess: 40
      });
      var mesh = new THREE.Mesh(geometry, material);

      scene = new THREE.Scene();
      scene.add(mesh);

      var light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.position.set(0, 1, 1);
      scene.add(light);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);
      renderer.render(scene, camera);
      document.getElementById('demo3').appendChild(renderer.domElement);

      var controls = new THREE.TrackballControls(camera);

      function render() {
         requestAnimationFrame(render);

         mesh.rotation.x += 0.01;
	 mesh.rotation.y += 0.01;
	 mesh.rotation.z += 0.01;

         renderer.render(scene, camera);

	 controls.update();
      }
      render();
   }

   PresentationDemo.Init = function() {
      init1();   
      init2();
      init3();
   }
})(window.PresentationDemo = window.PresentationDemo || {})
