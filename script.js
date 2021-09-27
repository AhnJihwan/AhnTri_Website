(function() {
	const emulator = new V86Starter({
		wasm_path: "/v86/build/v86.wasm", 
		memory_size: 128 * 1024 * 1024, //128M
		vga_memory_size: 8 * 1024 * 1024, //8M
		screen_container: document.getElementById("container"),
		bios: {
			url: "/v86/bios/seabios.bin",
		},
		vga_bios: {
			url: "/v86/bios/vgabios.bin",
		},
		cdrom: {
			url: "/images/atos_rpc.iso",
		},
		autostart: true,
	});
})();
