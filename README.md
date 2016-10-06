    
    NWJS Windows application designed to keep all your sitting room stuff in one place.
    Multi Document Interface allowing to open a Web Browser, a file Browser, a music player, note files, or a video player. Every one of these features custom made to browse local files, or easily map network drives and add them to the local database.

    Websockets used to allow browsing of minimal experience on any device on the lan.(Play, Next, Volume, etc.)

        +--+-+-+-+-+-+-+-+
            Kiosked
            Save every possible string in database (MP3/4 metas, file names, text file content) in database
        ----------------
	View {
		All views are web view but the web browser.
			Browser allow link to be sent to all devices
		All the local file browser will be built in the web interface
			Full socket support.
			Every device local browsing + upload
			Browse host fs
			? Scroll event on all devices
			ng repeat for tab with tab directive
		use css to show hide tab main view
		Keep all in ram active
	}

	LibDaemon {
		// ? External project
		Allow daemon to be spawned on host when husser is close for File Watch on every libraries.
		Maybe as windows service (? else);
	}

	PseudoPad {
		? Text event on all devices

	tabDirective {
		Type
		Custom header from type
		WebviewDirective
	}

	WebviewDirective {
		// ? External project
		all content from https://developer.chrome.com/apps/tags/webview binded to angular directive things
	}

    ViewSelector =

        Select View:
            Video
            Music
            Browser
            Note pad
    Main view:
        on start
            ViewSelector();
            exit to OS();
    Add view
        ViewSelector();

    Video :
        Browse locally or add a network drive to a main videos array
        Use Popcorn like techno
        Web video to local video
        Youtube || others(Unquittable) player saving played filled cache as file on pre-parametered dir

    Music :
        Browse locally or add a network drive to a main videos array
        Use Popcorn-time like techno
        Web video to local video
        Soundcloud || others (Unquittable) player saving played filled cache as file on pre-parametered dir

    Browser
        100% Free will nested web browser.
        Crusom NWJS addons to skip adds, download files, UX etc.

    Note pad
        Ease of access
        Save to DB and to FS ?
