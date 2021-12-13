# Accessible React Accordion Component


### Basic Concept
An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

Terms for understanding accordions include:
### Accordion Header:
Label for or thumbnail representing a section of content that also serves as a control for showing, and in some </br>  implementations, hiding the section of content.
### Accordion Panel:
    Section of content associated with an accordion header.
In some accordions, there are additional elements that are always visible adjacent to the accordion header. For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section. And, in some cases, a snippet of the hidden content may also be visually persistent.

### Keyboard Interaction
<ul>
    <li><strong>Space or Enter:</strong>
        <li>When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.</li>
        <li>When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.</li>
    </li>
    <li><strong>Tab:</strong> Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.</li>
    <li><strong>Shift + Tab:</strong> Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.</li>
    <li><strong>Down Arrow (Optional):</strong> If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.</li>
    <li><strong>Up Arrow (Optional):</strong> If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.</li>
    <li><strong>Home (Optional):</strong> When focus is on an accordion header, moves focus to the first accordion header.</li>
    <li><strong>End (Optional):</strong> When focus is on an accordion header, moves focus to the last accordion header.</li>
</ul>

<strong>

</strong>

### WAI-ARIA Roles, States, and Properties:
<ul>
    <li>The title of each accordion header is contained in an element with <strong> role button 
    </strong>
    </li>
    <li>Each accordion header <strong>button</strong> is wrapped in an element with role heading that has a value set for <strong>aria-level</strong> that is appropriate for the information architecture of the page.</li>
    <li>If the native host language has an element with an implicit <strong>heading</strong> and <strong>aria-level</strong>, such as an HTML heading tag, a native host language element may be used.</li>
    <li>The <strong>button</strong> element is the only element inside the <strong>heading</strong> element. That is, if there are other visually persistent elements, they are not included inside the <strong>heading</strong> element.</li>
    <li>If the accordion panel associated with an accordion header is visible, the header button element has <strong>aria-expanded</strong> set to <strong>true</strong>. If the panel is not visible, <strong>aria-expanded</strong> is set to <strong>false</strong>.</li>
    <li>The accordion header <strong>button</strong> element has <strong>aria-controls</strong> set to the ID of the element containing the accordion panel content.</li>
     <li>If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header <strong>button</strong> element has <strong>aria-disabled</strong> set to <strong>true</strong>.</li>
    <li><strong>Optionally, </strong>each element that serves as a container for panel content has <strong>role region</strong> and <strong>aria-labelledby</strong> with a value that refers to the button that controls display of the panel.
        <li><strong>Avoid using the region role</strong> in circumstances that create landmark region proliferation, e.g., in an accordion that contains more than approximately 6 panels that can be expanded at the same time.</li>
        <li><strong>Role region </strong>is especially helpful to the perception of structure by screen reader users when panels contain heading elements or a nested accordion.</li>
    </li>
</ul>


### Accessibility Features:
The visual design includes features intended to help users understand that the accordion provides enhanced keyboard navigation functions. When an accordion header button has keyboard focus, the styling of the accordion container and all its header buttons is changed.

When any accordion header button receives focus:
-The border encompassing the entire accordion changes color.
-The background color of the accordion header buttons changes.

The focused accordion header button:
-Has a border that encompasses both the header text and icon.
-Has a background color that distinguishes it from the other accordion buttons that are not focused.

### Keyboard Support
<table>
    <thead>
        <tr>
        <th>Key</th>
        <th>Function</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Space or Enter</td>
            <td>When focus is on the accordion header of a collapsed section, expands the section.</td>
        </tr>
        <tr>
            <td>Tab</td>
            <td>
            -Moves focus to the next focusable element.
            -All focusable elements in the accordion are included in the page `Tab` sequence.
            </td>
        </tr>
        <tr>
            <td>Shift + Tab</td>
            <td>
            -Moves focus to the previous focusable element.
            -All focusable elements in the accordion are included in the page Tab sequence.
            </td>
        </tr>
        <tr>
            <td>Down Arrow</td>
            <td>
            -When focus is on an accordion header, moves focus to the next accordion header.
            -When focus is on last accordion header, moves focus to first accordion header.
            </td>
        </tr>
        <tr>
            <td>Up Arrow</td>
            <td>
            -When focus is on an accordion header, moves focus to the previous accordion header.
            -When focus is on first accordion header, moves focus to last accordion header.
            </td>
        </tr>
        <tr>
            <td>Page Down</td>
            <td>
            -When focus is on an accordion header, moves focus to the next accordion header.
            -When focus is on last accordion header, moves focus to first accordion header.
            </td>
        </tr>
        <tr>
            <td>Page Up</td>
            <td>
            -When focus is on an accordion header, moves focus to the previous accordion header.
            -When focus is on first accordion header, moves focus to last accordion header.
            </td>
        </tr>
        <tr>
            <td>Home</td>
            <td>When focus is on an accordion header, moves focus to the first accordion header.</td>
        </tr>
        <tr>
            <td>End</td>
            <td>
             When focus is on an accordion header, moves focus to the last accordion header.
            </td>
        </tr>
    </tbody>
</table>


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
