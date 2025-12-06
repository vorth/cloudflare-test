#! /usr/bin/env bash

# The `--all` means rclone will prompt for the access key ID and secret access key
#
rclone config create r2-images s3 provider=Cloudflare endpoint=https://97a1ec58ba7f64831320e12177e5889a.r2.cloudflarestorage.com region=auto --all

