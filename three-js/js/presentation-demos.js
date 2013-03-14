(function(PresentationDemo) {
   PresentationDemo.Init1 = function() { 
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var sphere = new THREE.SphereGeometry(180, 8, 6, 0);
      var material = new THREE.MeshBasicMaterial({ 
	      wireframe: true,
	      color: 0xff2400
      });
      var mesh = new THREE.Mesh(sphere, material);

      var scene = new THREE.Scene();
      scene.add(mesh);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);
      renderer.render(scene, camera);
      document.getElementById('demo1').appendChild(renderer.domElement);
   }
   
   PresentationDemo.Init2 = function() { 
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var sphere = new THREE.SphereGeometry(180, 8, 6, 0);
      var material = new THREE.MeshPhongMaterial({ 
	      color: 0xff2400,
	      specular: 0xfc2847,
	      shininess: 32
      });
      var mesh = new THREE.Mesh(sphere, material);

      var scene = new THREE.Scene();
      scene.add(mesh);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);
      renderer.render(scene, camera);
      document.getElementById('demo2').appendChild(renderer.domElement);
   }

   PresentationDemo.Init = function() {
      PresentationDemo.Init1();   
      PresentationDemo.Init2();
   }
})(window.PresentationDemo = window.PresentationDemo || {})
