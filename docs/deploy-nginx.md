# Deploy using NGINX

Now you can make use of Nginx to reverse proxy the requests to the Next.js

Go to the root directory of the project and run the below command to start the
project with the PM2 process manager after running `pnpm build`.

```bash
 pm2 start "pnpm start" --name "mondo"
```

## Nginx Configuration

- Create a new file in the **`/etc/nginx/sites-available`** directory. (Example
  mondo.conf)

- Paste everything from the [nginx.conf](./config/nginx.conf) file in the newly
  created file.

- Make sure to change `YOUR_DOMAIN` to your domain name. in Line 14, 59,
  60(Example: mondo.app.com) (Without the <https://>)

- Close and save the file.

- Then symlink the file to the **`/etc/nginx/sites-enabled`** directory.

```bash
sudo ln -s /etc/nginx/sites-available/mondo.conf /etc/nginx/sites-enabled/mondo.conf
```

- By Default Nextjs will run on Port 3000.

## SSL with Let's Encrypt

- Install Certbot with snap

```bash
sudo snap install --classic certbot
```

- Run the following command to get the SSL certificate

```bash
 certbot certonly --nginx
```

- Select the domain name you want to get the SSL certificate for.

- Once done, Open the configuration file and uncomment line 11, 12, 59 and 60.

```text
#  listen 443 ssl http2;
#  listen [::]:443 ssl http2;
#  ssl_certificate /etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem;
#  ssl_certificate_key /etc/letsencrypt/live/YOUR_DOMAIN/privkey.pem;
```

- Now restart the Nginx server

```bash
sudo service restart nginx
```

- Now you can access the site using <https://YOUR_DOMAIN>
