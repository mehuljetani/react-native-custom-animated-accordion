<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: "Helvetica Neue", Arial, sans-serif;
        background-color: #f0f0f0;
        color: #333;
        margin: 0;
        padding: 20px;
      }

      h1 {
        font-size: 32px;
        color: #4a90e2;
        margin-bottom: 20px;
      }

      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
      }

      h2 {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
      }

      pre {
        background-color: #1e1e1e;
        color: #dcdcdc;
        padding: 15px;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 14px;
        margin-bottom: 20px;
      }

      code {
        font-family: "Courier New", monospace;
        font-size: 14px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        background-color: #fff;
      }

      table th,
      table td {
        padding: 12px 15px;
        border: 1px solid #ddd;
        text-align: left;
      }

      table th {
        background-color: #f5f5f5;
        font-weight: bold;
      }

      table td code {
        font-size: 14px;
        color: #4a90e2;
      }
    </style>
    <title>Accordion Component Props</title>

  </head>
  <body>
    <h1>react-native-custom-animated-accordion</h1>
    <p>
      A custom React Native component for creating an animated accordion with
      expandable content and smooth transitions.
    </p>

    <h2>Installation</h2>
    <p>Install the package using either npm or yarn:</p>

    <h3>Using npm:</h3>
    <pre><code>npm install react-native-custom-animated-accordion react-native-reanimated</code></pre>

    <h3>Using yarn:</h3>
    <pre><code>yarn add react-native-custom-animated-accordion react-native-reanimated</code></pre>

    <h2>Usage</h2>
    <p>
      To implement the <code>Accordion</code> component in your React Native
      project, follow the example below:
    </p>

    <h3>Import the Component</h3>
    <pre><code>import Accordion from 'react-native-custom-animated-accordion';</code></pre>

    <h3>Example</h3>
    <p>
      Here is an example of how to use the <code>Accordion</code> component:
    </p>
    <img
      src="../Downloads/accord.gif"
      alt="Demo GIF"
      style="width: 160px; height: auto"
    />
    <h1>Props</h1>
    <p>
      Below is a detailed explanation of all the props used in the
      <code>Accordion</code> component.
    </p>

    <h2>Props</h2>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>title</code></td>
          <td><code>string</code></td>
          <td><code>""</code></td>
          <td>The text to display as the accordion header.</td>
        </tr>
        <tr>
          <td><code>maxHeight</code></td>
          <td><code>number</code></td>
          <td><code>100</code></td>
          <td>Maximum height of the accordion when expanded.</td>
        </tr>
        <tr>
          <td><code>rotateEnd</code></td>
          <td><code>string</code></td>
          <td><code>'180deg'</code></td>
          <td>Rotation angle when the accordion is fully opened.</td>
        </tr>
        <tr>
          <td><code>rotateStart</code></td>
          <td><code>string</code></td>
          <td><code>'0deg'</code></td>
          <td>Rotation angle when the accordion is closed.</td>
        </tr>
        <tr>
          <td><code>bodyStyle</code></td>
          <td><code>ViewStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the accordion body container.</td>
        </tr>
        <tr>
          <td><code>iconStyle</code></td>
          <td><code>ViewStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the icon image in the accordion header.</td>
        </tr>
        <tr>
          <td><code>titleStyle</code></td>
          <td><code>TextStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the title text in the accordion header.</td>
        </tr>
        <tr>
          <td><code>iconSourceOpen</code></td>
          <td><code>string</code></td>
          <td><code>null</code></td>
          <td>The image source for the icon when the accordion is opened.</td>
        </tr>
        <tr>
          <td><code>headerStyle</code></td>
          <td><code>ViewStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the accordion header.</td>
        </tr>
        <tr>
          <td><code>iconSourceClosed</code></td>
          <td><code>string</code></td>
          <td><code>null</code></td>
          <td>The image source for the icon when the accordion is closed.</td>
        </tr>
        <tr>
          <td><code>iconViewStyle</code></td>
          <td><code>ViewStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the view containing the icon.</td>
        </tr>
        <tr>
          <td><code>containerStyle</code></td>
          <td><code>ViewStyle</code></td>
          <td><code>{}</code></td>
          <td>Custom styles for the accordion container.</td>
        </tr>
        <tr>
          <td><code>children</code></td>
          <td><code>React.ReactNode</code></td>
          <td><code>null</code></td>
          <td>Content to be rendered inside the accordion when expanded.</td>
        </tr>
      </tbody>
    </table>

    <h2>Usage Example</h2>
    <pre><code>
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import Accordion from 'react-native-custom-animated-accordion';

    const App = () => {
    return (
    &lt;View style={styles.container}&gt;
    &lt;Accordion
    title="Click to Expand"
    maxHeight={90}
    rotateStart="0deg"
    rotateEnd="180deg"
    bodyStyle={{ backgroundColor: '#f0f0f0' }}
    titleStyle={{ color: '#333', fontSize: 18 }}
    iconSourceOpen={require('./assets/plus.png')}
    iconSourceClosed={require('./assets/minus.png')}
    &gt;
    &lt;Text style={{ padding: 16, color: '#555' }}&gt;
    This is the content of the accordion.
    &lt;/Text&gt;
    &lt;/Accordion&gt;
    &lt;/View&gt;
    );
    };

    const styles = StyleSheet.create({
      container: {
        borderRadius: 8,
        marginVertical: 8,
        overflow: "hidden",
        borderColor: "#ddd",
      },
      header: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        justifyContent: "space-between",
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
      },
      icon: {
        alignItems: "center",
        justifyContent: "center",
      },
      iconImage: {
        width: 15,
        height: 15,
      },
      body: {
        backgroundColor: "#f7f7f7",
      },
    });

    export default App;

</code></pre>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>

    <h2>Contact</h2>
    <p>
      For questions or issues, please visit the
      <a
        href="https://github.com/mehuljetani/react-native-custom-animated-accordion/issues"
      >
        GitHub issues page</a
      >.
    </p>

  </body>
</html>
