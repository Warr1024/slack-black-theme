#!/bin/sh
SRC="`pwd`/slack-custom.js"
cd /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static &&\
for X in index ssb-interop; do
	( [ -s $X.js.orig ] || cp $X.js $X.js.orig ) &&\
	(
		cat $X.js.orig
		echo
		cat "$SRC"
	) >$X.js
done
