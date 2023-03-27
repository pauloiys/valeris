import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Section padding="40px 0 40px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
			/>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="30%"
				display="flex"
				empty-min-width="64px"
				empty-border-color="LightGray"
				align-items="center"
				lg-width="50%"
				sm-width="70%"
				empty-border-style="solid"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					Melly Franklin
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="70%"
				align-items="center"
				lg-width="50%"
				sm-width="30%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Button Text" md-color="--light" md-font="500 20px/1.3 --fontFamily-serifTimes" md-text-transform="uppercase" />
					<Override slot="Button Icon" md-color="--light" />
					<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
					<Box
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
						md-padding="20px 0px 20px 0px"
					>
						<Link color="--lightD1" font="--base" href="#" text-decoration-line="initial">
							Facebook
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
						>
							LinkedIn
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
						>
							Twitter
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Image
				align-self="auto"
				order="0"
				display="block"
				height="600px"
				margin="0px 0px 80px 0px"
				object-position="50% 75%"
				width="100%"
				src="https://images.unsplash.com/photo-1519242220831-09410926fbff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
				flex="0 1 auto"
				object-fit="cover"
			/>
			<Text
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
				sm-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				font="--headline1"
				md-text-align="center"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				md-margin="0px 0px 0px 0px"
			>
				Sorry, but the page you requested cannot be found. Error #404.{"\n\n"}
			</Text>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						01
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Text
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
					>
						Fashion
					</Text>
				</Box>
			</Box>
			<Box
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						02
					</Text>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
					>
						Beauty
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
			>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						03
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
				>
					<Text
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
					>
						Culture
					</Text>
				</Box>
			</Box>
			<Box
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						04
					</Text>
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						View on Magazine
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						05
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Consultant
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0">
			<Box
				empty-border-color="LightGray"
				display="flex"
				justify-content="flex-end"
				sm-flex-wrap="wrap"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					padding="16px 16px 16px 16px"
					lg-width="33.333%"
					sm-width="100%"
					empty-min-height="64px"
					empty-border-color="LightGray"
					width="25%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1535361109-b8fa03822e9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Couture Trends to Try Now
					</Text>
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					width="25%"
					padding="16px 16px 16px 16px"
					sm-width="100%"
					empty-min-width="64px"
					lg-width="33.333%"
					empty-border-color="LightGray"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1549298222-1c31e8915347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 0/cover no-repeat" />
					<Text font="--base" margin="5px 0 0px 0" color="--lightD1" as="h3">
						W Magazine
					</Text>
					<Text margin="20px 0 5px 0" color="--lightD2" as="p">
						A Visual Diary of Couture Week
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="25%"
					padding="16px 16px 16px 16px"
					empty-min-height="64px"
					lg-width="33.333%"
					sm-width="100%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text font="--base" margin="5px 0 0px 0" color="--lightD1" as="h3">
						Refinery
					</Text>
					<Text margin="20px 0 5px 0" color="--lightD2" as="p">
						How Archive Fashion Came to Dominate TikTok
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" sm-align-items="center" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" sm-justify-content="center" align-items="flex-end" lg-align-items="center" />
			<Link
				href="#"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				border-style="solid"
				md-margin="0px 0px 0px 0px"
				sm-text-align="center"
				margin="0px 10% 0px 0px"
				color="--light"
				font="--headline1"
				border-width="0 0 1px 0"
				sm-margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				text-decoration-line="initial"
				border-color="--color-light"
				sm-font="normal 700 34px/1.1 &quot;Inter&quot;, sans-serif"
			>
				Let's work tgther!
			</Link>
		</Section>
		<Section sm-padding="74px 0 74px 0" quarkly-title="Footer" padding="90px 0 90px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" md-align-items="center" />
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				md-justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
					Melly Franklin
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-align-items="center"
				md-width="100%"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					+1 (705) 177-58-55
					<br />
					melly@fbfranklin.com
				</Text>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				empty-min-height="64px"
				empty-border-width="1px"
				md-width="100%"
				empty-min-width="64px"
				md-align-items="center"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					123 Demo Street New York,{" "}
					<br />
					NY 12345
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});