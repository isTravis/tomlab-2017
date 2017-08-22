import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from 'components/App/App';


export default function(locals) {
	const app = renderToStaticMarkup(
		<StaticRouter location={locals.path}>
			<App />
		</StaticRouter>
	);

	const helmet = Helmet.renderStatic();
	const regexp = / data-react-helmet="true"/g;

	return `<!doctype html>
<html lang="en">
	<head>	
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" type="image/png" sizes="192x192" href="/icon.png">
		<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icon.png">
		<link href="/main.css" rel="stylesheet" />
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-104891622-1', 'auto');
			ga('send', 'pageview');
		</script>
		<script>
			/**
			* Function that tracks a click on an outbound link in Analytics.
			* This function takes a valid URL string as an argument, and uses that URL string
			* as the event label. Setting the transport method to 'beacon' lets the hit be sent
			* using 'navigator.sendBeacon' in browser that support it.
			*/
			var trackOutboundLink = function(url) {
				ga('send', 'event', 'outbound', 'click', url, {
					'transport': 'beacon'
				});
			}
			</script>
		${helmet.title.toString().replace(regexp, '')}
		${helmet.meta.toString().replace(regexp, '')}
		${helmet.link.toString().replace(regexp, '')}
	</head>
	<body>
		${app}
	</body>
</html>`;
}
