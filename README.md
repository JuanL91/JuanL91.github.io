# JuanL91.github.io 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transformador de Estilo Cubista</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
       <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARTE VIVO - Transforma y Aprende</title>
    <style>
        /* CSS Variables from provided theme */
        :root {
            --font-size: 16px;
            --background: #ffffff;
            --foreground: oklch(0.145 0 0);
            --card: #ffffff;
            --card-foreground: oklch(0.145 0 0);
            --popover: oklch(1 0 0);
            --popover-foreground: oklch(0.145 0 0);
            --primary: #030213;
            --primary-foreground: oklch(1 0 0);
            --secondary: oklch(0.95 0.0058 264.53);
            --secondary-foreground: #030213;
            --muted: #ececf0;
            --muted-foreground: #717182;
            --accent: #e9ebef;
            --accent-foreground: #030213;
            --destructive: #d4183d;
            --destructive-foreground: #ffffff;
            --border: rgba(0, 0, 0, 0.1);
            --input: transparent;
            --input-background: #f3f3f5;
            --switch-background: #cbced4;
            --font-weight-medium: 500;
            --font-weight-normal: 400;
            --ring: oklch(0.708 0 0);
            --chart-1: oklch(0.646 0.222 41.116);
            --chart-2: oklch(0.6 0.118 184.704);
            --chart-3: oklch(0.398 0.07 227.392);
            --chart-4: oklch(0.828 0.189 84.429);
            --chart-5: oklch(0.769 0.188 70.08);
            --radius: 0.625rem;
            --sidebar: oklch(0.985 0 0);
            --sidebar-foreground: oklch(0.145 0 0);
            --sidebar-primary: #030213;
            --sidebar-primary-foreground: oklch(0.985 0 0);
            --sidebar-accent: oklch(0.97 0 0);
            --sidebar-accent-foreground: oklch(0.205 0 0);
            --sidebar-border: oklch(0.922 0 0);
            --sidebar-ring: oklch(0.708 0 0);
        }

        .dark {
            --background: oklch(0.145 0 0);
            --foreground: oklch(0.985 0 0);
            --card: oklch(0.145 0 0);
            --card-foreground: oklch(0.985 0 0);
            --popover: oklch(0.145 0 0);
            --popover-foreground: oklch(0.985 0 0);
            --primary: oklch(0.985 0 0);
            --primary-foreground: oklch(0.205 0 0);
            --secondary: oklch(0.269 0 0);
            --secondary-foreground: oklch(0.985 0 0);
            --muted: oklch(0.269 0 0);
            --muted-foreground: oklch(0.708 0 0);
            --accent: oklch(0.269 0 0);
            --accent-foreground: oklch(0.985 0 0);
            --destructive: oklch(0.396 0.141 25.723);
            --destructive-foreground: oklch(0.637 0.237 25.331);
            --border: oklch(0.269 0 0);
            --input: oklch(0.269 0 0);
            --ring: oklch(0.439 0 0);
            --font-weight-medium: 500;
            --font-weight-normal: 400;
            --chart-1: oklch(0.488 0.243 264.376);
            --chart-2: oklch(0.696 0.17 162.48);
            --chart-3: oklch(0.769 0.188 70.08);
            --chart-4: oklch(0.627 0.265 303.9);
            --chart-5: oklch(0.645 0.246 16.439);
            --sidebar: oklch(0.205 0 0);
            --sidebar-foreground: oklch(0.985 0 0);
            --sidebar-primary: oklch(0.488 0.243 264.376);
            --sidebar-primary-foreground: oklch(0.985 0 0);
            --sidebar-accent: oklch(0.269 0 0);
            --sidebar-accent-foreground: oklch(0.985 0 0);
            --sidebar-border: oklch(0.269 0 0);
            --sidebar-ring: oklch(0.439 0 0);
        }

        /* Base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: var(--border);
            outline-color: var(--ring);
        }

        html {
            font-size: var(--font-size);
            scroll-behavior: smooth;
        }

        body {
            background: linear-gradient(to bottom right, var(--secondary), var(--background), var(--primary));
            background-attachment: fixed;
            color: var(--foreground);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            transition: background 0.3s ease;
            min-height: 100vh;
            padding-bottom: 4rem;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: var(--font-weight-medium);
            line-height: 1.3;
            margin-bottom: 0.5em;
        }

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.75rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        p {
            margin-bottom: 1rem;
            font-weight: var(--font-weight-normal);
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: var(--font-weight-medium);
        }

        /* Layout */
        .container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        /* Header styles */
        header {
            background-color: var(--card);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            transition: var(--transition);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 0;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.75rem;
            font-weight: var(--font-weight-bold);
            color: var(--primary);
            cursor: pointer;
        }

        .logo-icon {
            width: 2.5rem;
            height: 2.5rem;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 1.5rem;
        }

        nav a {
            color: var(--primary);
            text-decoration: none;
            font-weight: var(--font-weight-medium);
            padding: 0.5rem 0;
            position: relative;
            transition: var(--transition);
        }

        nav a:hover, nav a.active {
            opacity: 0.85;
        }

        nav a.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--secondary);
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary);
        }

        /* Main content */
        main {
            padding: 3rem 0;
        }

        .view {
            display: none;
        }

        .view.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-title {
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: var(--font-weight-bold);
        }

        .page-subtitle {
            text-align: center;
            color: var(--muted-foreground);
            max-width: 700px;
            margin: 0 auto 3rem;
            font-size: 1.125rem;
        }

        /* Grid layout */
        .styles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            padding: 1rem;
        }

        /* Art Style Card */
        .art-style-card {
            background-color: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            border: 1px solid var(--border);
        }

        .art-style-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .card-image {
            height: 180px;
            width: 100%;
            object-fit: cover;
            display: block;
        }

        .card-content {
            padding: 1.5rem;
        }

        .card-content h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--primary);
        }

        .card-content span {
            color: var(--muted-foreground);
            font-weight: var(--font-weight-medium);
        }

        /* Cards for home view */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .card {
            background-color: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            transition: var(--transition);
            border: 1px solid var(--border);
            text-align: center;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .card-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }

        .card p {
            color: var(--muted-foreground);
        }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: var(--font-weight-medium);
            text-decoration: none;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            font-size: 1rem;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: var(--primary-foreground);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .btn-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
        }

        .btn-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }

        /* Module styles */
        .module {
            background-color: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            padding: 2.5rem;
            margin-bottom: 3rem;
            border: 1px solid var(--border);
        }

        .module-title {
            text-align: center;
            margin-bottom: 2.5rem;
            color: var(--primary);
            position: relative;
            padding-bottom: 1rem;
        }

        .module-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            border-radius: 2px;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .movement-card {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            background-color: var(--muted);
            transition: var(--transition);
        }

        .movement-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border-color: var(--secondary);
        }

        .movement-card h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .color-palette {
            display: flex;
            gap: 0.5rem;
            margin: 1rem 0;
        }

        .color-swatch {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .artist-card {
            background-color: var(--muted);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid var(--secondary);
        }

        .artist-card h3 {
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .artist-specialty {
            font-weight: var(--font-weight-medium);
            color: var(--secondary-foreground);
            display: block;
            margin-bottom: 0.75rem;
        }

        .connection-box {
            background-color: var(--accent);
            border-left: 4px solid var(--secondary);
            padding: 1.5rem;
            border-radius: 0 var(--radius-md) var(--radius-md) 0;
            margin: 1.5rem 0;
        }

        /* Transformation module */
        .upload-area {
            border: 2px dashed var(--border);
            border-radius: var(--radius-lg);
            padding: 3rem;
            text-align: center;
            margin-bottom: 2rem;
            background-color: var(--muted);
            cursor: pointer;
            transition: var(--transition);
        }

        .upload-area:hover {
            border-color: var(--secondary);
            background-color: var(--accent);
        }

        .upload-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        .style-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .style-option {
            border: 2px solid var(--border);
            border-radius: var(--radius-md);
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: var(--transition);
            background-color: var(--card);
        }

        .style-option:hover, .style-option.selected {
            border-color: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .style-option.selected {
            background-color: var(--accent);
            position: relative;
        }

        .style-option.selected::after {
            content: '✓';
            position: absolute;
            top: -8px;
            right: -8px;
            width: 20px;
            height: 20px;
            background-color: var(--secondary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: bold;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .image-container {
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .image-placeholder {
            background: linear-gradient(45deg, var(--muted) 25%, var(--accent) 50%, var(--muted) 75%);
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--muted-foreground);
            font-weight: var(--font-weight-medium);
        }

        .reflection-box {
            background-color: var(--accent);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            margin-top: 1.5rem;
        }

        /* Journal entries */
        .journal-entry {
            border-left: 4px solid var(--secondary);
            padding: 1.5rem;
            background-color: var(--muted);
            border-radius: 0 var(--radius-md) var(--radius-md) 0;
            margin-bottom: 1.5rem;
        }

        .journal-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .journal-date {
            font-weight: var(--font-weight-medium);
            color: var(--primary);
        }

        .journal-tag {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: var(--font-weight-medium);
        }

        /* Form styles */
        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-control {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background-color: var(--input-background);
            color: var(--foreground);
            font-family: inherit;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px var(--ring);
        }

        textarea.form-control {
            min-height: 100px;
            resize: vertical;
        }

        /* Modal styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .modal.active {
            display: flex;
            opacity: 1;
        }

        .modal-content {
            background-color: var(--card);
            border-radius: var(--radius-xl);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            width: 90%;
            max-width: 1000px;
            max-height: 90vh;
            overflow-y: auto;
            transform: translateY(20px);
            transition: transform 0.3s ease;
            position: relative;
        }

        .modal.active .modal-content {
            transform: translateY(0);
        }

        .modal-header {
            padding: 1.5rem 2rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-title {
            font-size: 2rem;
            color: var(--primary);
        }

        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--muted-foreground);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
        }

        .close-modal:hover {
            background-color: var(--muted);
            color: var(--primary);
        }

        .modal-body {
            padding: 2rem;
        }

        .modal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: var(--radius-md);
            margin-bottom: 2rem;
            display: block;
        }

        .modal-period {
            display: inline-block;
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-weight: var(--font-weight-medium);
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .modal-description {
            margin-bottom: 2rem;
            line-height: 1.7;
            color: var(--foreground);
        }

        .characteristics-list, .artists-list {
            list-style: none;
            padding-left: 0;
            margin-bottom: 2rem;
        }

        .characteristics-list li, .artists-list li {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .characteristics-list li:before, .artists-list li:before {
            content: "•";
            color: var(--secondary);
            font-weight: bold;
            display: inline-block;
            width: 1.25rem;
            font-size: 1.5rem;
            line-height: 0.75;
        }

        .section-title {
            font-size: 1.5rem;
            margin: 2rem 0 1rem;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .section-title:before {
            content: "";
            display: inline-block;
            width: 4px;
            height: 1.25rem;
            background-color: var(--secondary);
            border-radius: 2px;
        }

        /* Portfolio styles */
        .portfolio-section {
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border);
        }

        .portfolio-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .section-number {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: var(--font-weight-bold);
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .portfolio-item {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            overflow: hidden;
        }

        .portfolio-item-header {
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: var(--primary-foreground);
            padding: 0.75rem 1rem;
            font-weight: var(--font-weight-medium);
        }

        .portfolio-item-content {
            padding: 1.5rem;
        }

        /* Project creation modal */
        .step-indicator {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            gap: 0.5rem;
        }

        .step-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--muted);
            transition: var(--transition);
        }

        .step-dot.active {
            background-color: var(--secondary);
            transform: scale(1.25);
        }

        .step-dot.completed {
            background-color: var(--primary);
        }

        /* Footer styles */
        footer {
            background-color: var(--card);
            border-top: 1px solid var(--border);
            padding: 2rem 0;
            margin-top: auto;
        }

        .footer-content {
            text-align: center;
            color: var(--muted-foreground);
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.05rem;
            line-height: 1.6;
        }

        /* Dark mode toggle */
        .theme-toggle {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: var(--card);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 100;
            font-size: 1.25rem;
            transition: transform 0.3s ease;
        }

        .theme-toggle:hover {
            transform: rotate(30deg);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }

            nav ul {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: var(--card);
                flex-direction: column;
                padding: 1rem 0;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 10;
            }

            nav ul.active {
                display: flex;
            }

            nav ul li {
                text-align: center;
                padding: 0.75rem 0;
            }

            nav ul a {
                display: block;
                padding: 0.5rem 0;
            }

            .btn-group {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 300px;
            }

            .page-title {
                font-size: 2rem;
            }

            .module {
                padding: 1.75rem;
            }

            .modal-content {
                width: 95%;
                max-height: 85vh;
            }
        }

        @media (max-width: 480px) {
            .styles-grid, .cards-grid, .grid-2 {
                grid-template-columns: 1fr;
            }

            main {
                padding: 2rem 0 4rem;
            }

            .card-image {
                height: 160px;
            }
        }
    </style>
</head>
<body>
    <!-- Dark mode toggle button -->
    <button class="theme-toggle" id="themeToggle">🌓</button>

    <!-- Header -->
    <header>
        <div class="container header-content">
            <div class="logo" id="homeLink">
                <div class="logo-icon">🎨</div>
                <span>ARTE VIVO</span>
            </div>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
            
            <nav>
                <ul id="mainNav">
                    <li><a href="#" class="nav-link active" data-view="home">Inicio</a></li>
                    <li><a href="#" class="nav-link" data-view="educational">Módulo Educativo</a></li>
                    <li><a href="#" class="nav-link" data-view="transform">Transformación Visual</a></li>
                    <li><a href="#" class="nav-link" data-view="journal">Bitácora</a></li>
                    <li><a href="#" class="nav-link" data-view="culture">Conexión Cultural</a></li>
                    <li><a href="#" class="nav-link" data-view="portfolio">Portafolio</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        <!-- Home View -->
        <section id="home" class="view active">
            <h1 class="page-title">Transforma y Aprende</h1>
            <p class="page-subtitle">Laboratorio de cultura visual para estudiantes universitarios de artes visuales en República Dominicana y el Caribe. Explora movimientos artísticos, transforma tus imágenes con inteligencia artificial, y construye tu identidad artística crítica.</p>
            
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">🎨</div>
                    <h3>Módulo Educativo</h3>
                    <p>Aprende sobre movimientos artísticos fundamentales con enfoque crítico y contextualizado</p>
                </div>
                <div class="card">
                    <div class="card-icon">🤖</div>
                    <h3>Transformación con IA</h3>
                    <p>Experimenta con estilos artísticos aplicando inteligencia artificial a tus propias imágenes</p>
                </div>
                <div class="card">
                    <div class="card-icon">📒</div>
                    <h3>Bitácora Reflexiva</h3>
                    <p>Documenta tu proceso creativo y desarrolla pensamiento crítico sobre tu producción visual</p>
                </div>
            </div>
            
            <div class="btn-group">
                <button class="btn" id="startLearningBtn">Comenzar Aprendizaje</button>
                <button class="btn btn-secondary" id="createProjectBtn">Crear Proyecto</button>
            </div>
        </section>

        <!-- Educational Module - Combined with Art Styles Explorer -->
        <section id="educational" class="view">
            <h1 class="page-title">Explora los Movimientos Artísticos</h1>
            <p class="page-subtitle">Descubre los estilos artísticos más influyentes de la historia, sus características únicas y los artistas que los definieron</p>
            
            <div class="styles-grid" id="stylesGrid">
                <!-- Art style cards will be generated here by JavaScript -->
            </div>
        </section>

        <!-- Transformation Module -->
        <section id="transform" class="view">
            <div class="module">
                <h2 class="module-title">Transformación Visual con IA</h2>
                
                <div class="grid-2">
                    <div>
                        <h3>Sube tu Imagen</h3>
                        <div class="upload-area" id="uploadArea">
                            <div class="upload-icon">🖼️</div>
                            <p>Arrastra tu imagen aquí o haz clic para buscar</p>
                            <input type="file" id="imageUpload" accept="image/*" class="form-control" style="display: none;">
                            <button class="btn btn-secondary" style="margin-top: 1rem;">Seleccionar Imagen</button>
                        </div>
                        
                        <h3 style="margin-top: 2rem;">Selecciona un Estilo Artístico</h3>
                        <div class="style-grid">
                            <div class="style-option" data-style="impressionism">
                                <strong>Impresionismo</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Pinceladas luminosas y vibrantes</p>
                            </div>
                            <div class="style-option" data-style="expressionism">
                                <strong>Expresionismo</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Colores no naturales y formas distorsionadas</p>
                            </div>
                            <div class="style-option" data-style="surrealism">
                                <strong>Surrealismo</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Escenarios oníricos e irracionales</p>
                            </div>
                            <div class="style-option" data-style="cubism">
                                <strong>Cubismo</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Formas geométricas y múltiples perspectivas</p>
                            </div>
                            <div class="style-option" data-style="popart">
                                <strong>Pop Art</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Colores planos y brillantes</p>
                            </div>
                            <div class="style-option" data-style="abstract">
                                <strong>Arte Abstracto</strong>
                                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Elementos puros sin forma reconocible</p>
                            </div>
                        </div>
                        
                        <button class="btn" id="transformBtn" style="width: 100%; margin-top: 1.5rem;" disabled>Transformar Imagen con IA</button>
                    </div>
                    
                    <div>
                        <h3>Resultados de Transformación</h3>
                        <div id="resultsContainer">
                            <div class="upload-area" style="height: 300px;">
                                <div class="upload-icon" style="font-size: 5rem;">✨</div>
                                <h4>Resultados de Transformación</h4>
                                <p>Aquí aparecerán tus imágenes transformadas con inteligencia artificial después de seleccionar un estilo y procesar tu imagen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cultural Connection Module -->
        <section id="culture" class="view">
            <div class="module">
                <h2 class="module-title">Conexión Cultural Caribeña</h2>
                <p style="text-align: center; font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem;">
                    Diálogo entre movimientos artísticos globales y prácticas artísticas regionales. Artistas dominicanos y caribeños reinterpretando lenguajes universales desde nuestra identidad cultural.
                </p>
                
                <div class="grid-2">
                    <div class="artist-card">
                        <h3>José Inoa</h3>
                        <span class="artist-specialty">Expresionismo figurativo</span>
                        <p>Explora temas sociales y emocionales profundos con un lenguaje visual crudo y auténtico que refleja la realidad dominicana.</p>
                        
                        <div class="connection-box">
                            <p><strong>Conexión con Movimientos Globales:</strong> Su tratamiento de emociones intensas y distorsión expresiva conecta directamente con los principios del Expresionismo europeo, pero con raíces caribeñas.</p>
                        </div>
                    </div>
                    
                    <div class="artist-card">
                        <h3>Ada Balcácer</h3>
                        <span class="artist-specialty">Surrealismo mágico</span>
                        <p>Crea mundos oníricos que fusionan elementos del folclore dominicano con simbolismo personal y colectivo.</p>
                        
                        <div class="connection-box">
                            <p><strong>Conexión con Movimientos Globales:</strong> Sus composiciones irracionales y atmósferas místicas establecen un diálogo natural con el Surrealismo europeo, reinterpretado desde la cosmovisión caribeña.</p>
                        </div>
                    </div>
                    
                    <div class="artist-card">
                        <h3>Guillo Pérez</h3>
                        <span class="artist-specialty">Abstracción colorista</span>
                        <p>Utiliza el color como protagonista absoluto para evocar paisajes emocionales y espirituales de la tierra dominicana.</p>
                        
                        <div class="connection-box">
                            <p><strong>Conexión con Movimientos Globales:</strong> Su enfoque en campos de color vibrantes y texturas orgánicas dialoga con el Color Field del Abstraccionismo Abstracto, pero con una paleta tropical única.</p>
                        </div>
                    </div>
                    
                    <div class="artist-card">
                        <h3>Clara Ledesma</h3>
                        <span class="artist-specialty">Figuración expresiva</span>
                        <p>Explora temas sociales y políticos con un lenguaje visual vibrante que combina elementos del expresionismo y el surrealismo.</p>
                        
                        <div class="connection-box">
                            <p><strong>Conexión con Movimientos Globales:</strong> Su uso del color y la distorsión figurativa crea un puente entre el expresionismo europeo y las realidades sociales del Caribe.</p>
                        </div>
                    </div>
                </div>
                
                <div class="reflection-box" style="margin-top: 2rem;">
                    <h3 style="margin-top: 0;">Reflexión Crítica</h3>
                    <p style="margin-bottom: 1rem;">Después de estudiar los movimientos artísticos globales y conocer a nuestros artistas caribeños, reflexiona:</p>
                    <ul style="padding-left: 1.5rem;">
                        <li>¿Cómo reinterpretarías un movimiento artístico europeo desde tu experiencia caribeña?</li>
                        <li>¿Qué elementos de nuestra cultura visual (arquitectura, rituales, paisajes) podrían dialogar con el lenguaje abstracto?</li>
                        <li>¿Cómo el Vudú con su rica simbología visual podría ofrecer un campo para análisis surrealista?</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Journal View -->
        <section id="journal" class="view">
            <div class="module">
                <h2 class="module-title">Bitácora Visual Digital</h2>
                <p style="text-align: center; max-width: 700px; margin: 0 auto 2rem;">
                    Registra tu proceso creativo, reflexiones personales, dificultades encontradas y aprendizajes clave a lo largo de tu proyecto artístico.
                </p>
                
                <div class="form-container">
                    <div class="form-group">
                        <label for="journalDate">Fecha</label>
                        <input type="date" id="journalDate" class="form-control" value="2026-02-02">
                    </div>
                    
                    <div class="form-group">
                        <label for="journalImage">Imagen del Proceso</label>
                        <div class="upload-area" style="padding: 2rem; margin-top: 0.5rem;">
                            <div class="upload-icon">🖼️</div>
                            <p style="margin-bottom: 0.5rem;">Arrastra una imagen o haz clic para subir</p>
                            <input type="file" id="journalImage" accept="image/*" class="form-control" style="display: none;">
                            <button class="btn btn-secondary" style="margin-top: 0.5rem;">Seleccionar Imagen</button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalDescription">Descripción del Proceso</label>
                        <textarea id="journalDescription" class="form-control" placeholder="Describe lo que hiciste en esta etapa de tu proyecto...">Exploración inicial del proyecto con transformación en estilo Impresionista</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalReflection">Reflexión Personal</label>
                        <textarea id="journalReflection" class="form-control" placeholder="¿Qué sentiste durante este proceso? ¿Qué descubriste?">Descubrí cómo la luz tropical puede reinterpretarse con pinceladas vibrantes</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalDifficulties">Dificultades Encontradas</label>
                        <textarea id="journalDifficulties" class="form-control" placeholder="¿Qué obstáculos enfrentaste?">Dificultad para mantener la esencia de la imagen original</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalLearnings">Aprendizajes Clave</label>
                        <textarea id="journalLearnings" class="form-control" placeholder="¿Qué aprendiste en esta etapa?">El color puede transformar completamente la narrativa visual</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalChanges">Cambios Realizados</label>
                        <textarea id="journalChanges" class="form-control" placeholder="¿Qué ajustes hiciste a tu proyecto?">Ajusté la saturación para resaltar los elementos culturales</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalFuture">Intención Futura</label>
                        <textarea id="journalFuture" class="form-control" placeholder="¿Hacia dónde llevarás tu proyecto?">Explorar la fusión con elementos del Surrealismo caribeño</textarea>
                    </div>
                    
                    <button class="btn" style="width: 100%; padding: 1rem; margin-top: 1rem;">Guardar Entrada en Bitácora</button>
                </div>
                
                <div style="margin-top: 3rem; border-top: 1px solid var(--border); padding-top: 2rem;">
                    <h3 style="margin-bottom: 1.5rem; color: var(--primary);">Entradas Recientes</h3>
                    
                    <div class="journal-entry">
                        <div class="journal-header">
                            <span class="journal-date">15 de enero de 2026</span>
                            <span class="journal-tag">Proceso Creativo</span>
                        </div>
                        <p><strong>Descripción:</strong> Exploración inicial del proyecto con transformación en estilo Impresionista</p>
                        <div class="grid-2" style="margin-top: 1rem;">
                            <div>
                                <h4>Aprendizajes</h4>
                                <p>El color puede transformar completamente la narrativa visual</p>
                            </div>
                            <div>
                                <h4>Dificultades</h4>
                                <p>Dificultad para mantener la esencia de la imagen original</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="journal-entry">
                        <div class="journal-header">
                            <span class="journal-date">22 de enero de 2026</span>
                            <span class="journal-tag">Reflexión</span>
                        </div>
                        <p><strong>Descripción:</strong> Análisis de la transformación expresionista y su relación con la identidad cultural</p>
                        <div class="grid-2" style="margin-top: 1rem;">
                            <div>
                                <h4>Aprendizajes</h4>
                                <p>La distorsión puede ser una herramienta poderosa para expresar emociones sociales</p>
                            </div>
                            <div>
                                <h4>Dificultades</h4>
                                <p>Encontrar el equilibrio entre expresión y reconocibilidad cultural</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio View -->
        <section id="portfolio" class="view">
            <div class="module">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h2>Portafolio Digital</h2>
                    <p style="font-size: 1.25rem; color: var(--secondary);">Proyecto: "Raíces Visuales Dominicanas"</p>
                    <p style="font-size: 1.1rem; color: var(--muted-foreground);">Estudiante: María Rodríguez | Curso: Artes Visuales III</p>
                </div>
                
                <div class="portfolio-section">
                    <h3 class="section-title">
                        <span class="section-number">1</span>
                        Proyecto Base
                    </h3>
                    <div style="background-color: var(--muted); padding: 1.5rem; border-radius: var(--radius-md);">
                        <div class="grid-2">
                            <div>
                                <h4>Tema del Proyecto</h4>
                                <p>Identidad cultural dominicana a través de la arquitectura vernácula</p>
                            </div>
                            <div>
                                <h4>Intención Conceptual</h4>
                                <p>Explorar cómo las estructuras arquitectónicas reflejan nuestra historia colonial y resistencia cultural</p>
                            </div>
                            <div style="grid-column: span 2;">
                                <h4>Contexto Cultural</h4>
                                <p>República Dominicana, región del Cibao, análisis de casas coloniales y su transformación en el contexto urbano contemporáneo</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-section">
                    <h3 class="section-title">
                        <span class="section-number">2</span>
                        Transformaciones Visuales
                    </h3>
                    <div class="portfolio-grid">
                        <div class="portfolio-item">
                            <div class="portfolio-item-header">Impresionismo</div>
                            <div class="portfolio-item-content">
                                <div class="image-placeholder">Imagen transformada con IA</div>
                                <p style="margin-top: 0.75rem; font-style: italic;">Captura de la luz matutina en fachadas coloniales</p>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="portfolio-item-header">Expresionismo</div>
                            <div class="portfolio-item-content">
                                <div class="image-placeholder">Imagen transformada con IA</div>
                                <p style="margin-top: 0.75rem; font-style: italic;">Interpretación emocional de la decadencia arquitectónica</p>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="portfolio-item-header">Cubismo</div>
                            <div class="portfolio-item-content">
                                <div class="image-placeholder">Imagen transformada con IA</div>
                                <p style="margin-top: 0.75rem; font-style: italic;">Descomposición geométrica de elementos estructurales</p>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="portfolio-item-header">Surrealismo</div>
                            <div class="portfolio-item-content">
                                <div class="image-placeholder">Imagen transformada con IA</div>
                                <p style="margin-top: 0.75rem; font-style: italic;">Fusión onírica de elementos históricos y contemporáneos</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-section">
                    <h3 class="section-title">
                        <span class="section-number">3</span>
                        Bitácora Reflexiva
                    </h3>
                    <div>
                        <div class="journal-entry">
                            <div class="journal-header">
                                <span class="journal-date">15 de enero de 2026</span>
                                <span class="journal-tag">Proceso Creativo</span>
                            </div>
                            <p><strong>Descripción:</strong> Exploración inicial del proyecto con transformación en estilo Impresionista</p>
                            <div class="grid-2" style="margin-top: 1rem;">
                                <div>
                                    <h4>Aprendizajes</h4>
                                    <p>El color puede transformar completamente la narrativa visual</p>
                                </div>
                                <div>
                                    <h4>Dificultades</h4>
                                    <p>Dificultad para mantener la esencia de la imagen original</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="journal-entry">
                            <div class="journal-header">
                                <span class="journal-date">22 de enero de 2026</span>
                                <span class="journal-tag">Reflexión</span>
                            </div>
                            <p><strong>Descripción:</strong> Análisis de la transformación expresionista y su relación con la identidad cultural</p>
                            <div class="grid-2" style="margin-top: 1rem;">
                                <div>
                                    <h4>Aprendizajes</h4>
                                    <p>La distorsión puede ser una herramienta poderosa para expresar emociones sociales</p>
                                </div>
                                <div>
                                    <h4>Dificultades</h4>
                                    <p>Encontrar el equilibrio entre expresión y reconocibilidad cultural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-section">
                    <h3 class="section-title">
                        <span class="section-number">4</span>
                        Reflexión Crítica
                    </h3>
                    <div style="background-color: var(--accent); padding: 1.5rem; border-radius: var(--radius-md);">
                        <div style="margin-bottom: 1.5rem;">
                            <h4>¿Qué representa esta imagen para ti?</h4>
                            <p>Representa la tensión entre la preservación histórica y el desarrollo urbano en nuestras ciudades, un diálogo constante entre pasado y presente.</p>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <h4>Relación con contexto cultural</h4>
                            <p>La arquitectura colonial es un testimonio físico de nuestra historia compleja, donde conviven elementos españoles, africanos y taínos en un sincretismo visual único.</p>
                        </div>
                        <div>
                            <h4>Conexión con José Inoa</h4>
                            <p>Al igual que Inoa explora las emociones profundas de la condición humana dominicana, mi trabajo busca revelar las emociones contenidas en nuestras estructuras arquitectónicas - la nostalgia, la resistencia y la esperanza.</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn" style="padding: 1rem 2.5rem; font-size: 1.1rem;">
                        <span style="margin-right: 0.5rem;">↓</span> Descargar Portafolio Completo (PDF)
                    </button>
                    <p style="color: var(--muted-foreground); font-size: 0.875rem; margin-top: 0.5rem;">
                        Incluye proyecto base, transformaciones, bitácora y reflexiones críticas
                    </p>
                </div>
            </div>
        </section>
    </main>

    <!-- Detail Modal for Art Styles -->
    <div class="modal" id="detailModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title" id="modalTitle">Título del Estilo</h2>
                <button class="close-modal" id="closeModal">&times;</button>
            </div>
            <div class="modal-body">
                <img src="" alt="Imagen representativa" class="modal-image" id="modalImage">
                <span class="modal-period" id="modalPeriod">Período</span>
                <p class="modal-description" id="modalDescription">Descripción del estilo artístico</p>
                
                <h3 class="section-title">Características Principales</h3>
                <ul class="characteristics-list" id="modalCharacteristics">
                    <!-- Characteristics will be inserted here -->
                </ul>
                
                <h3 class="section-title">Artistas Representativos</h3>
                <ul class="artists-list" id="modalArtists">
                    <!-- Artists will be inserted here -->
                </ul>
            </div>
        </div>
    </div>

    <!-- Project Creation Modal -->
    <div class="modal" id="projectModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalTitleProject">Registro de Proyecto Artístico</h2>
                <div class="step-indicator">
                    <div class="step-dot active" id="stepDot1"></div>
                    <div class="step-dot" id="stepDot2"></div>
                    <div class="step-dot" id="stepDot3"></div>
                    <div class="step-dot" id="stepDot4"></div>
                </div>
            </div>
            <div class="modal-body">
                <!-- Step 1: Project Registration -->
                <div id="step1" class="modal-step">
                    <form id="projectForm">
                        <div class="form-group">
                            <label for="studentName">Nombre del Estudiante</label>
                            <input type="text" id="studentName" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="course">Curso / Grupo</label>
                            <input type="text" id="course" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="projectTitle">Título del Proyecto</label>
                            <input type="text" id="projectTitle" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="projectTheme">Tema del Proyecto</label>
                            <input type="text" id="projectTheme" class="form-control" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="conceptualIntent">Intención Conceptual</label>
                            <textarea id="conceptualIntent" class="form-control" required></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="culturalContext">Contexto Cultural</label>
                            <textarea id="culturalContext" class="form-control" required></textarea>
                        </div>
                    </form>
                </div>
                
                <!-- Step 2: Image Transformation -->
                <div id="step2" class="modal-step" style="display: none;">
                    <h3 style="margin-bottom: 1.5rem;">Transformación Visual con IA</h3>
                    <p style="margin-bottom: 2rem; color: var(--muted-foreground);">Sube tu imagen y transfórmala con estilos artísticos</p>
                    
                    <div class="upload-area" style="padding: 3rem; margin-bottom: 2rem;">
                        <div class="upload-icon">🖼️</div>
                        <p>Sube la imagen base de tu proyecto</p>
                        <input type="file" id="modalImageUpload" accept="image/*" class="form-control" style="display: none;">
                        <button class="btn btn-secondary" style="margin-top: 1rem;">Seleccionar Imagen</button>
                    </div>
                    
                    <h4 style="margin-bottom: 1rem;">Selecciona un Estilo Artístico</h4>
                    <div class="style-grid">
                        <div class="style-option" data-style="impressionism">
                            <strong>Impresionismo</strong>
                            <p style="font-size: 0.875rem; margin-top: 0.5rem;">Pinceladas luminosas</p>
                        </div>
                        <div class="style-option" data-style="expressionism">
                            <strong>Expresionismo</strong>
                            <p style="font-size: 0.875rem; margin-top: 0.5rem;">Colores intensos</p>
                        </div>
                        <div class="style-option" data-style="surrealism">
                            <strong>Surrealismo</strong>
                            <p style="font-size: 0.875rem; margin-top: 0.5rem;">Escenarios oníricos</p>
                        </div>
                        <div class="style-option" data-style="cubism">
                            <strong>Cubismo</strong>
                            <p style="font-size: 0.875rem; margin-top: 0.5rem;">Formas geométricas</p>
                        </div>
                    </div>
                </div>
                
                <!-- Step 3: Journal Entry -->
                <div id="step3" class="modal-step" style="display: none;">
                    <h3 style="margin-bottom: 1.5rem;">Bitácora Visual Digital</h3>
                    <p style="margin-bottom: 2rem; color: var(--muted-foreground);">Registra tu proceso creativo y reflexiones</p>
                    
                    <div class="form-group">
                        <label for="processDescription">Descripción del Proceso</label>
                        <textarea id="processDescription" class="form-control" rows="3">Exploración inicial del proyecto con transformación en estilo Impresionista</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="personalReflection">Reflexión Personal</label>
                        <textarea id="personalReflection" class="form-control" rows="3">Descubrí cómo la luz tropical puede reinterpretarse con pinceladas vibrantes</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="difficulties">Dificultades Encontradas</label>
                        <textarea id="difficulties" class="form-control" rows="2">Dificultad para mantener la esencia de la imagen original</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="keyLearnings">Aprendizajes Clave</label>
                        <textarea id="keyLearnings" class="form-control" rows="2">El color puede transformar completamente la narrativa visual</textarea>
                    </div>
                </div>
                
                <!-- Step 4: Critical Reflection -->
                <div id="step4" class="modal-step" style="display: none;">
                    <h3 style="margin-bottom: 1.5rem;">Reflexión Crítica</h3>
                    <p style="margin-bottom: 2rem; color: var(--muted-foreground);">Análisis simbólico, cultural y personal de tu obra</p>
                    
                    <div class="form-group">
                        <label for="imageMeaning">¿Qué representa esta imagen para ti?</label>
                        <textarea id="imageMeaning" class="form-control" rows="2">Representa la tensión entre la preservación histórica y el desarrollo urbano en nuestras ciudades</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="emotions">¿Qué emociones transmite?</label>
                        <textarea id="emotions" class="form-control" rows="2">Nostalgia, esperanza y resistencia cultural</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="culturalRelation">Relación con contexto cultural dominicano</label>
                        <textarea id="culturalRelation" class="form-control" rows="2">La arquitectura colonial es un testimonio físico de nuestra historia compleja y sincretismo cultural</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="inoaRelation">Relación con José Inoa</label>
                        <textarea id="inoaRelation" class="form-control" rows="2">Al igual que Inoa explora las emociones profundas de la condición humana dominicana, mi trabajo busca revelar las emociones contenidas en nuestras estructuras arquitectónicas</textarea>
                    </div>
                    
                    <div class="reflection-box" style="margin-top: 1.5rem;">
                        <h4 style="margin-top: 0;">Conexión Pedagógica</h4>
                        <p>
                            Esta reflexión completa tu ciclo de investigación-acción: has aplicado conocimientos teóricos, 
                            experimentado con herramientas tecnológicas, documentado tu proceso y conectado tu producción 
                            con referentes culturales locales. Tu portafolio está listo para ser generado.
                        </p>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="display: flex; justify-content: space-between; padding: 1.5rem; border-top: 1px solid var(--border);">
                <button class="btn btn-secondary" id="prevBtn" style="display: none;">← Anterior</button>
                <button class="btn" id="nextBtn">Siguiente →</button>
                <button class="btn" id="finishBtn" style="display: none;">Generar Portafolio Final</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container footer-content">
            <div style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">ARTE VIVO</div>
            <p style="max-width: 600px; margin: 0 auto 2rem;">
                Laboratorio de cultura visual para estudiantes universitarios de artes visuales en República Dominicana y el Caribe
            </p>
            
            <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 2rem; margin: 2rem 0;">
                <a href="#" style="color: var(--muted-foreground); text-decoration: none; transition: opacity 0.3s; font-weight: var(--font-weight-medium);">Términos</a>
                <a href="#" style="color: var(--muted-foreground); text-decoration: none; transition: opacity 0.3s; font-weight: var(--font-weight-medium);">Privacidad</a>
                <a href="#" style="color: var(--muted-foreground); text-decoration: none; transition: opacity 0.3s; font-weight: var(--font-weight-medium);">Contacto</a>
                <a href="#" style="color: var(--muted-foreground); text-decoration: none; transition: opacity 0.3s; font-weight: var(--font-weight-medium);">Documentación</a>
            </div>
            
            <p style="color: var(--muted-foreground); margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border); font-size: 0.875rem;">
                © 2026 Plataforma Educativa ARTE VIVO. Transforma y Aprende. Todos los derechos reservados.
            </p>
        </div>
    </footer>

    <script>
        // Sistema de vistas
        let currentView = "home";
        
        function goView(view) {
            document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
            document.getElementById(view).classList.add("active");
            currentView = view;
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-view') === view) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu
            document.getElementById('mainNav').classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Navigation setup
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.getAttribute('data-view');
                goView(view);
            });
        });
        
        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            document.getElementById('mainNav').classList.toggle('active');
        });
        
        // Home link
        document.getElementById('homeLink').addEventListener('click', () => {
            goView('home');
        });
        
        // Buttons in home view
        document.getElementById('startLearningBtn').addEventListener('click', () => {
            goView('educational');
        });
        
        document.getElementById('createProjectBtn').addEventListener('click', () => {
            document.getElementById('projectModal').classList.add('active');
            document.body.style.overflow = 'hidden';
            updateStep(1);
        });
        
        // Close modals when clicking outside
        document.getElementById('detailModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('detailModal')) {
                closeModal();
            }
        });
        
        document.getElementById('projectModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('projectModal')) {
                closeProjectModal();
            }
        });
        
        // Close modal buttons
        document.getElementById('closeModal').addEventListener('click', closeModal);
        
        function closeModal() {
            document.getElementById('detailModal').classList.remove('active');
        }
        
        function closeProjectModal() {
            document.getElementById('projectModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            updateStep(1);
        }
        
        // Dark mode toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark');
            if (typeof localStorage !== 'undefined') {
                if (document.body.classList.contains('dark')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }
        });
        
        // Initialize theme from localStorage
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof localStorage !== 'undefined') {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.body.classList.add('dark');
                }
            }
        });
        
        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (document.getElementById('detailModal').classList.contains('active')) {
                    closeModal();
                }
                if (document.getElementById('projectModal').classList.contains('active')) {
                    closeProjectModal();
                }
            }
        });
        
        /* === ART STYLES DATA === */
        const artStyles = [
            {
                id: '1',
                title: 'Impresionismo',
                period: '1860 - 1890',
                description: 'El Impresionismo fue un movimiento artístico revolucionario que surgió en Francia a finales del siglo XIX. Los artistas impresionistas buscaban capturar la luz y el color en el momento exacto, pintando al aire libre y utilizando pinceladas visibles y colores puros. Se enfocaban en representar la impresión visual del momento, especialmente en términos de los efectos cambiantes de la luz y el color.',
                characteristics: [
                    'Pinceladas sueltas y visibles',
                    'Énfasis en la luz natural y sus cambios',
                    'Colores brillantes y puros aplicados lado a lado',
                    'Temas cotidianos y paisajes',
                    'Pintura al aire libre (plein air)',
                ],
                artists: [
                    'Claude Monet',
                    'Pierre-Auguste Renoir',
                    'Edgar Degas',
                    'Camille Pissarro',
                    'Berthe Morisot',
                ],
                image: 'https://images.unsplash.com/photo-1699391202798-bec3f1c894bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbXByZXNzaW9uaXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYxNzg1MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '2',
                title: 'Cubismo',
                period: '1907 - 1920',
                description: 'El Cubismo, iniciado por Pablo Picasso y Georges Braque, revolucionó la pintura europea al romper con la perspectiva tradicional. Los artistas cubistas representaban objetos desde múltiples puntos de vista simultáneamente, fragmentando las formas y reorganizándolas en composiciones abstractas. Este movimiento marcó el comienzo del arte abstracto y cambió para siempre la manera de ver y representar la realidad.',
                characteristics: [
                    'Fragmentación de formas en planos geométricos',
                    'Múltiples puntos de vista simultáneos',
                    'Paleta de colores neutros (especialmente en el cubismo analítico)',
                    'Uso de formas geométricas básicas',
                    'Rechazo de la perspectiva tradicional',
                ],
                artists: [
                    'Pablo Picasso',
                    'Georges Braque',
                    'Juan Gris',
                    'Fernand Léger',
                    'Robert Delaunay',
                ],
                image: 'https://images.unsplash.com/photo-1694636773362-8c6b4e591286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJpc20lMjBhcnR8ZW58MXx8fHwxNzYxODY1MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '3',
                title: 'Surrealismo',
                period: '1920 - 1940',
                description: 'El Surrealismo fue un movimiento artístico y literario que buscaba liberar el pensamiento, el lenguaje y la experiencia humana de los límites racionales. Inspirado por las teorías de Freud sobre el inconsciente, los surrealistas creaban obras que combinaban imágenes realistas de manera ilógica y onírica, explorando los sueños, el automatismo y el subconsciente para revelar verdades más profundas de la experiencia humana.',
                characteristics: [
                    'Yuxtaposición de objetos inconexos',
                    'Escenas oníricas y fantásticas',
                    'Técnicas de automatismo',
                    'Simbolismo freudiano',
                    'Realismo técnico con contenido irreal',
                ],
                artists: [
                    'Salvador Dalí',
                    'René Magritte',
                    'Max Ernst',
                    'Joan Miró',
                    'Frida Kahlo',
                ],
                image: 'https://images.unsplash.com/photo-1658828570744-49dbc43a95cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJyZWFsaXNtJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYxODY1MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '4',
                title: 'Renacimiento',
                period: '1400 - 1600',
                description: 'El Renacimiento fue un periodo de renacimiento cultural que se originó en Italia y se extendió por toda Europa. Este movimiento marcó la transición de la Edad Media a la Modernidad, caracterizado por un renovado interés en el arte, la ciencia y la filosofía de la antigüedad clásica. Los artistas del Renacimiento desarrollaron técnicas revolucionarias como la perspectiva lineal y el sfumato, buscando representar la belleza ideal y el humanismo.',
                characteristics: [
                    'Uso de perspectiva lineal',
                    'Proporciones anatómicas precisas',
                    'Técnicas de claroscuro y sfumato',
                    'Temas religiosos y mitológicos',
                    'Búsqueda de la belleza ideal y el realismo',
                ],
                artists: [
                    'Leonardo da Vinci',
                    'Miguel Ángel Buonarroti',
                    'Rafael Sanzio',
                    'Sandro Botticelli',
                    'Tiziano Vecellio',
                ],
                image: 'https://images.unsplash.com/photo-1599894019794-50339c9ad89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5haXNzYW5jZSUyMGFydHxlbnwxfHx8fDE3NjE4MTM2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '5',
                title: 'Expresionismo Abstracto',
                period: '1940 - 1960',
                description: 'El Expresionismo Abstracto fue el primer movimiento artístico específicamente estadounidense en alcanzar influencia mundial. Los artistas de este movimiento enfatizaban la expresión espontánea, personal y emocional a través de la abstracción. Rechazaban la representación figurativa tradicional, favoreciendo la acción de pintar y el gesto como medios de expresión, creando obras que transmitían intensidad emocional y estados psicológicos profundos.',
                characteristics: [
                    'Abstracción total o casi total',
                    'Énfasis en el proceso y el gesto',
                    'Grandes formatos',
                    'Expresión emocional intensa',
                    'Aplicación espontánea de la pintura',
                ],
                artists: [
                    'Jackson Pollock',
                    'Mark Rothko',
                    'Willem de Kooning',
                    'Franz Kline',
                    'Helen Frankenthaler',
                ],
                image: 'https://images.unsplash.com/photo-1532540983331-3260f8487880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGV4cHJlc3Npb25pc218ZW58MXx8fHwxNzYxODMxNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '6',
                title: 'Pop Art',
                period: '1950 - 1970',
                description: 'El Pop Art surgió como una reacción contra el Expresionismo Abstracto, incorporando imágenes de la cultura popular, la publicidad, los cómics y los objetos cotidianos. Este movimiento desafió las distinciones entre el "arte elevado" y la cultura de masas, utilizando técnicas de producción comercial y colores brillantes. El Pop Art reflejaba y comentaba sobre la sociedad de consumo de posguerra y la creciente influencia de los medios de comunicación.',
                characteristics: [
                    'Imágenes de la cultura popular y consumo',
                    'Colores brillantes y contrastantes',
                    'Técnicas de reproducción mecánica',
                    'Ironía y comentario social',
                    'Repetición de imágenes',
                ],
                artists: [
                    'Andy Warhol',
                    'Roy Lichtenstein',
                    'David Hockney',
                    'Claes Oldenburg',
                    'Tom Wesselmann',
                ],
                image: 'https://images.unsplash.com/photo-1619632973808-4acf8041df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBhcnR8ZW58MXx8fHwxNzYxODY1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '7',
                title: 'Barroco',
                period: '1600 - 1750',
                description: 'El Barroco fue un estilo artístico que se caracterizó por su dramatismo, movimiento y ornamentación exuberante. Surgió como una respuesta de la Iglesia Católica a la Reforma Protestante, buscando conmover emocionalmente a los fieles. Los artistas barrocos creaban obras grandiosas y teatrales, utilizando fuertes contrastes de luz y sombra, composiciones dinámicas y una riqueza visual abrumadora para evocar emociones intensas.',
                characteristics: [
                    'Dramatismo y teatralidad',
                    'Fuertes contrastes de luz y sombra (tenebrismo)',
                    'Composiciones dinámicas y diagonales',
                    'Ornamentación abundante',
                    'Intensidad emocional',
                ],
                artists: [
                    'Caravaggio',
                    'Peter Paul Rubens',
                    'Rembrandt van Rijn',
                    'Diego Velázquez',
                    'Gian Lorenzo Bernini',
                ],
                image: 'https://images.unsplash.com/photo-1694123598708-312a31dcfbc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJvcXVlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYxODIxMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
            },
            {
                id: '8',
                title: 'Modernismo',
                period: '1890 - 1940',
                description: 'El Modernismo fue un amplio movimiento cultural que abarcó muchas corrientes artísticas y se caracterizó por una ruptura deliberada con los estilos tradicionales del pasado. Los artistas modernistas experimentaban con nuevas formas, materiales y conceptos, cuestionando las convenciones establecidas. Este periodo vio el surgimiento de numerosos movimientos de vanguardia que transformaron radicalmente la práctica artística y sentaron las bases del arte contemporáneo.',
                characteristics: [
                    'Experimentación con formas y materiales',
                    'Rechazo de tradiciones académicas',
                    'Enfoque en la innovación y lo nuevo',
                    'Abstracción y simplificación',
                    'Reflexión sobre el arte mismo',
                ],
                artists: [
                    'Wassily Kandinsky',
                    'Piet Mondrian',
                    'Paul Klee',
                    'Kazimir Malevich',
                    'Constantin Brâncuși',
                ],
                image: 'https://images.unsplash.com/photo-1579009721337-cec3c69778e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm5pc3QlMjBhcnR8ZW58MXx8fHwxNzYxODY1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
            }
        ];

        // Elementos del DOM
        const grid = document.getElementById("stylesGrid");
        const detailModal = document.getElementById("detailModal");
        const closeModalBtn = document.getElementById("closeModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalImage = document.getElementById("modalImage");
        const modalPeriod = document.getElementById("modalPeriod");
        const modalDescription = document.getElementById("modalDescription");
        const modalCharacteristics = document.getElementById("modalCharacteristics");
        const modalArtists = document.getElementById("modalArtists");

        // Renderizar estilos artísticos
        function renderStyles() {
            grid.innerHTML = "";
            artStyles.forEach(style => {
                const card = document.createElement("div");
                card.className = "art-style-card";
                card.innerHTML = `
                    <img src="${style.image}" class="card-image">
                    <div class="card-content">
                        <h3>${style.title}</h3>
                        <span>${style.period}</span>
                    </div>
                `;
                card.onclick = () => openModal(style);
                grid.appendChild(card);
            });
        }

        // Abrir modal con detalles
        function openModal(style) {
            modalTitle.textContent = style.title;
            modalImage.src = style.image;
            modalPeriod.textContent = style.period;
            modalDescription.textContent = style.description;
            
            modalCharacteristics.innerHTML = style.characteristics.map(c => `<li>${c}</li>`).join("");
            modalArtists.innerHTML = style.artists.map(a => `<li>${a}</li>`).join("");
            
            detailModal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        // Cerrar modal
        function closeModal() {
            detailModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }

        // Project creation modal logic
        let currentStep = 1;
        const stepDots = document.querySelectorAll('.step-dot');
        const modalSteps = document.querySelectorAll('.modal-step');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        const modalTitleProject = document.getElementById('modalTitleProject');

        function updateStep(step) {
            // Hide all steps
            document.querySelectorAll('.modal-step').forEach(stepEl => {
                stepEl.style.display = 'none';
            });
            
            // Show current step
            document.getElementById(`step${step}`).style.display = 'block';
            
            // Update step dots
            stepDots.forEach((dot, index) => {
                dot.classList.remove('active', 'completed');
                if (index + 1 === step) {
                    dot.classList.add('active');
                } else if (index + 1 < step) {
                    dot.classList.add('completed');
                }
            });
            
            // Update buttons
            if (step === 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
                nextBtn.textContent = 'Siguiente →';
                modalTitleProject.textContent = 'Registro de Proyecto Artístico';
            } else if (step === 2) {
                prevBtn.style.display = 'inline-block';
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
                nextBtn.textContent = 'Siguiente →';
                modalTitleProject.textContent = 'Transformación Visual con IA';
            } else if (step === 3) {
                prevBtn.style.display = 'inline-block';
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
                nextBtn.textContent = 'Siguiente →';
                modalTitleProject.textContent = 'Bitácora Visual Digital';
            } else if (step === 4) {
                prevBtn.style.display = 'inline-block';
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'inline-block';
                modalTitleProject.textContent = 'Reflexión Crítica';
            }
            
            currentStep = step;
        }

        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                updateStep(currentStep - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentStep < 4) {
                // Validate step 1 form
                if (currentStep === 1) {
                    const studentName = document.getElementById('studentName').value;
                    const course = document.getElementById('course').value;
                    const projectTitle = document.getElementById('projectTitle').value;
                    
                    if (!studentName || !course || !projectTitle) {
                        alert('Por favor completa los campos obligatorios: Nombre del Estudiante, Curso/Grupo y Título del Proyecto');
                        return;
                    }
                }
                
                // Validate step 2
                if (currentStep === 2) {
                    const selectedStyle = document.querySelector('#step2 .style-option.selected');
                    if (!selectedStyle) {
                        alert('Por favor selecciona un estilo artístico');
                        return;
                    }
                }
                
                updateStep(currentStep + 1);
            }
        });

        finishBtn.addEventListener('click', () => {
            // In a real implementation, this would generate the portfolio
            alert('¡Portafolio generado exitosamente! En la implementación real, se crearía un PDF descargable y una carpeta en Google Drive.');
            closeProjectModal();
            goView('portfolio');
        });

        // Style selection in modals
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options in the same container
                const container = option.closest('.style-grid');
                container.querySelectorAll('.style-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Enable transform button if in main view and image is uploaded
                if (currentView === 'transform' && document.getElementById('imageUpload').files.length > 0) {
                    document.getElementById('transformBtn').disabled = false;
                }
            });
        });

        // Image upload handling for main view
        const uploadArea = document.getElementById('uploadArea');
        const imageUpload = document.getElementById('imageUpload');
        const transformBtn = document.getElementById('transformBtn');
        const resultsContainer = document.getElementById('resultsContainer');

        uploadArea.addEventListener('click', () => {
            imageUpload.click();
        });

        imageUpload.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                transformBtn.disabled = false;
                // Show preview in results container (simplified for demo)
                resultsContainer.innerHTML = `
                    <div class="comparison-grid">
                        <div>
                            <h4 style="margin-bottom: 0.75rem;">Imagen Original</h4>
                            <div class="image-container">
                                <div class="image-placeholder">Vista previa de imagen subida</div>
                            </div>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 0.75rem;">Imagen Transformada</h4>
                            <div class="image-container">
                                <div class="image-placeholder">Resultado de transformación con IA</div>
                            </div>
                        </div>
                    </div>
                    <div class="reflection-box">
                        <h4>Reflexión Pedagógica</h4>
                        <p>Observa cómo los principios formales del estilo seleccionado transforman tu imagen original. ¿Qué elementos se destacan? ¿Cómo cambia el significado visual? Documenta tus observaciones en tu bitácora reflexiva.</p>
                    </div>
                `;
            }
        });

        // Transform button
        transformBtn.addEventListener('click', () => {
            const selectedStyle = document.querySelector('.style-option.selected');
            if (!selectedStyle) {
                alert('Por favor selecciona un estilo artístico');
                return;
            }
            
            if (imageUpload.files.length === 0) {
                alert('Por favor sube una imagen primero');
                return;
            }
            
            // In a real implementation, this would call an AI API
            alert(`Transformando imagen con estilo "${selectedStyle.textContent}"... En la implementación real, la imagen sería procesada por una API de IA.`);
        });

        // Initialize the app
        document.addEventListener("DOMContentLoaded", () => {
            renderStyles();
            
            // Set today's date as default for journal
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('journalDate').value = today;
            
            // Add event listeners to modal image upload
            const modalImageUpload = document.getElementById('modalImageUpload');
            const modalUploadArea = document.querySelector('#step2 .upload-area');
            
            modalUploadArea.addEventListener('click', () => {
                modalImageUpload.click();
            });
            
            modalImageUpload.addEventListener('change', () => {
                if (modalImageUpload.files.length > 0) {
                    nextBtn.disabled = false;
                }
            });
            
            // Add event listeners to step 2 style options in modal
            const modalStyleOptions = document.querySelectorAll('#step2 .style-option');
            modalStyleOptions.forEach(option => {
                option.addEventListener('click', () => {
                    modalStyleOptions.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });
        });
    </script>
</body>
</html>


        });
    </script>
</body>
</html>

