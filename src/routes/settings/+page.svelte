<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';

	// Integration Settings Stores
	const integrationSettings = writable({
		emby: {
			enabled: false,
			apiKey: '',
			hostUrl: '',
			port: 8096,
			defaultLibrary: ''
		},
		jellyfin: {
			enabled: false,
			apiKey: '',
			hostUrl: '',
			port: 8097,
			userSettings: ''
		},
		plex: {
			enabled: false,
			plexToken: '',
			hostUrl: '',
			port: 32400,
			libraryPreferences: ''
		},
		trakt: {
			enabled: false,
			apiKey: '',
			clientId: '',
			clientSecret: '',
			callbackUrl: ''
		},
		navidrome: {
			enabled: false,
			apiKey: '',
			hostUrl: '',
			port: 4533,
			defaultUser: ''
		},
		spotify: {
			enabled: false,
			apiKey: '',
			clientId: '',
			clientSecret: '',
			callbackUrl: '',
			syncPreferences: {
				playlists: true,
				library: true
			}
		}
	});

	// HTTP Configuration Store
	const httpConfig = writable({
		connectionTimeout: 30,
		readTimeout: 30,
		writeTimeout: 30,
		sslVerification: true,
		proxyEnabled: false,
		proxyUrl: '',
		rateLimitRequests: 100,
		rateLimitInterval: 60
	});

	// Playlist/Collection Sync Store
	const syncSettings = writable({
		playlistTypes: {
			music: true,
			directMedia: false
		},
		collectionTypes: {
			series: true,
			singleMedia: true
		},
		syncFrequency: 'daily',
		conflictResolution: 'skip',
		notifyOnError: true
	});

	// SpotDL Settings Store
	const spotDlSettings = writable({
		enabled: false,
		apiSettings: {
			apiKey: '',
			oauthEnabled: false
		},
		storage: {
			downloadDir: '/downloads/music',
			namingPattern: '{artist} - {album} - {title}',
			format: 'mp3',
			quality: '320k'
		},
		retryAttempts: 3,
		notifyOnComplete: true
	});

	// Advanced Options Store
	const advancedSettings = writable({
		loggingLevel: 'INFO',
		healthCheckInterval: 300,
		backupEnabled: true,
		backupInterval: 'daily',
		userPermissions: {
			adminOnly: true,
			allowUserCustomization: false
		}
	});

	function handleSave() {
		// Implement save functionality
		alert('Settings saved!');
	}

	// Helper function to render integration fields
	function renderIntegrationFields(integration: string) {
		const config = $integrationSettings[integration];
		if (!config) return null;

		return config.enabled;
	}
</script>

<div class="container mx-auto p-4 space-y-8">
	<h2 class="h2">Advanced Settings</h2>

	<Accordion>
		<!-- Media Server Integrations -->
		<AccordionItem>
			<svelte:fragment slot="lead"><i class="fas fa-server"></i></svelte:fragment>
			<svelte:fragment slot="summary">Media Server Integrations</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="card p-4 space-y-6">
					<!-- Emby -->
					<div class="space-y-4">
						<label class="label">
							<span class="font-bold">Enable Emby</span>
							<input type="checkbox" bind:checked={$integrationSettings.emby.enabled} />
						</label>

						{#if $integrationSettings.emby.enabled}
							<div class="grid grid-cols-2 gap-4">
								<label class="label">
									<span>API Key</span>
									<input
										class="input"
										type="password"
										bind:value={$integrationSettings.emby.apiKey}
									/>
								</label>
								<label class="label">
									<span>Host URL</span>
									<input class="input" type="text" bind:value={$integrationSettings.emby.hostUrl} />
								</label>
								<label class="label">
									<span>Port</span>
									<input class="input" type="number" bind:value={$integrationSettings.emby.port} />
								</label>
								<label class="label">
									<span>Default Library</span>
									<input
										class="input"
										type="text"
										bind:value={$integrationSettings.emby.defaultLibrary}
									/>
								</label>
							</div>
						{/if}
					</div>

					<!-- Similar blocks for Jellyfin, Plex, etc. -->
					<!-- Add more integration blocks following the same pattern -->
				</div>
			</svelte:fragment>
		</AccordionItem>

		<!-- HTTP Configuration -->
		<AccordionItem>
			<svelte:fragment slot="lead"><i class="fas fa-globe"></i></svelte:fragment>
			<svelte:fragment slot="summary">HTTP Configuration</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="card p-4 space-y-4">
					<div class="grid grid-cols-2 gap-4">
						<label class="label">
							<span>Connection Timeout (s)</span>
							<input class="input" type="number" bind:value={$httpConfig.connectionTimeout} />
						</label>
						<label class="label">
							<span>SSL Verification</span>
							<input type="checkbox" bind:checked={$httpConfig.sslVerification} />
						</label>
						<label class="label">
							<span>Enable Proxy</span>
							<input type="checkbox" bind:checked={$httpConfig.proxyEnabled} />
						</label>
						{#if $httpConfig.proxyEnabled}
							<label class="label">
								<span>Proxy URL</span>
								<input class="input" type="text" bind:value={$httpConfig.proxyUrl} />
							</label>
						{/if}
					</div>
				</div>
			</svelte:fragment>
		</AccordionItem>

		<!-- SpotDL Integration -->
		<AccordionItem>
			<svelte:fragment slot="lead"><i class="fas fa-music"></i></svelte:fragment>
			<svelte:fragment slot="summary">SpotDL Configuration</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="card p-4 space-y-4">
					<label class="label">
						<span>Enable SpotDL</span>
						<input type="checkbox" bind:checked={$spotDlSettings.enabled} />
					</label>

					{#if $spotDlSettings.enabled}
						<div class="grid grid-cols-2 gap-4">
							<label class="label">
								<span>Download Directory</span>
								<input class="input" type="text" bind:value={$spotDlSettings.storage.downloadDir} />
							</label>
							<label class="label">
								<span>File Format</span>
								<select class="select" bind:value={$spotDlSettings.storage.format}>
									<option value="mp3">MP3</option>
									<option value="flac">FLAC</option>
									<option value="m4a">M4A</option>
								</select>
							</label>
							<label class="label">
								<span>Quality</span>
								<select class="select" bind:value={$spotDlSettings.storage.quality}>
									<option value="320k">320kbps</option>
									<option value="256k">256kbps</option>
									<option value="128k">128kbps</option>
								</select>
							</label>
							<label class="label">
								<span>Retry Attempts</span>
								<input
									class="input"
									type="number"
									bind:value={$spotDlSettings.retryAttempts}
									min="1"
									max="5"
								/>
							</label>
						</div>
					{/if}
				</div>
			</svelte:fragment>
		</AccordionItem>

		<!-- Advanced Options -->
		<AccordionItem>
			<svelte:fragment slot="lead"><i class="fas fa-tools"></i></svelte:fragment>
			<svelte:fragment slot="summary">Advanced Options</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="card p-4 space-y-4">
					<label class="label">
						<span>Logging Level</span>
						<select class="select" bind:value={$advancedSettings.loggingLevel}>
							<option value="DEBUG">Debug</option>
							<option value="INFO">Info</option>
							<option value="WARN">Warning</option>
							<option value="ERROR">Error</option>
						</select>
					</label>

					<label class="label">
						<span>Health Check Interval (seconds)</span>
						<input class="input" type="number" bind:value={$advancedSettings.healthCheckInterval} />
					</label>

					<label class="label">
						<span>Enable Automatic Backups</span>
						<input type="checkbox" bind:checked={$advancedSettings.backupEnabled} />
					</label>

					{#if $advancedSettings.backupEnabled}
						<label class="label">
							<span>Backup Interval</span>
							<select class="select" bind:value={$advancedSettings.backupInterval}>
								<option value="hourly">Hourly</option>
								<option value="daily">Daily</option>
								<option value="weekly">Weekly</option>
							</select>
						</label>
					{/if}
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>

	<div class="flex justify-end space-x-2">
		<button class="btn variant-ghost-surface">Cancel</button>
		<button class="btn variant-filled-primary" on:click={handleSave}>Save Changes</button>
	</div>
</div>
