rm -rf public
hugo --minify
s3deploy -source=public/ -region=eu-north-1 -bucket=staticbattery.com -path root -acl='public-read' -distribution-id=E1TX7TXFKWFR6S