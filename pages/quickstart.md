# oncyber V2 Quick Start Guide

Ready to build new worlds in oncyber V2? LFG:

#### **Creating a New World in oncyber V2**

* Go to [v2.oncyber.io](https://v2.oncyber.io/) and log in.  
  * Haven’t signed up for V2 yet?  
    * If you don’t have an existing oncyber account, create one above.  
    * [Fill out this form](https://oncyber.typeform.com/V2earlyaccess) to be added to V2’s waitlist.  
    * For accelerated access, [stop by Discord](https://discord.gg/NCuAWD4FCz) and let us know that you’ve signed up and you’re ready to build in V2\!  
* Click “**WORLDS**” in the top-left, then “**Create from Scratch**” in the slide-out menu.  
* This will open a new world template in V2’s Studio interface at [v2.oncyber.io/studio](https://v2.oncyber.io/studio).

#### **Basic Studio Navigation**

oncyber’s V2 Studio uses a combination of mouse and keyboard inputs for navigation:

* **Keyboard Movement:** *Use WASD* or the *arrow keys* to move directionally, *Spacebar* to move up, and *B* to move down. *Hold down Shift on the keyboard* to move faster.  
* **Mouse Movement:** *Click and drag the right mouse button* to move the camera more quickly in the corresponding direction.  
* **Rotate Camera:** *Click and drag the left mouse button* to rotate the camera.  
* **Zoom:** *Use the mouse wheel* or *pinch in/out with a trackpad* to zoom.

#### **Adding Your First Components**

The collapsible **\+ Add** section is automatically expanded when entering Studio. This is where you’ll find and add components to your scene. **Drag and Drop** from these menus to add any component to your scene. For example:

* Click “**3D**” in the left-hand column to browse starter 3D assets, then click-and-drag the first box titled “**Mesh**” into your scene.

#### **Adjusting Component Parameters**

Every component added to your world will appear in the column on the right-hand side called “**World Items**.” When selected, additional contextual menus for that component will appear. To adjust parameter settings for any component, select it directly in your scene, or find and click it in the World Items list. For example:

* With your “**Mesh**” asset selected, expand the “**Color & Opacity**” menu in its own UI on the right under the “**World Items**” list, then click the swatch and use the color picker interface to choose a new shade.

#### **Changing Position, Rotation, and Scale of Components**

Once added, any component with a visual form can be transformed using the gizmo that appears once selected.

* **Size:** click and drag any of the arrows to move the object along the associated axis.  
* **Rotation:** hover over one of the dotted lines then click and drag to rotate the selected component on the associated axis.   
* **Scale:** hover over the dots at the corner of the component and click and drag to scale the object up or down.

For both rotation and size, each axis is color coded: X is Red, Y is Green, and Z is Blue.

Tip: Your changes to these three key Parameters will be reflected as numerical values in the component’s Transform tab, where they can also be edited directly.

#### **Adding Functionality to Assets**

Behaviors are modular pieces of visual logic that can add different types of functionality to components in your world. You can code your own, or use existing no-code blocks from V2’s library. For example:

* Click “**Logic**” in the left-hand column to browse prebuilt logic, then scroll down (or use the search box) to find the “**Spin**” Behavior, then click-and-drag that onto the “**Mesh**” you added into your scene. The mesh will begin to spin.

#### **Adjusting Behavior Functionality**

Like components themselves, the functionality attached to a component can be found in the “**World Items**,” nested under the component it’s attached to. You can adjust the Behavior’s functionality further there. For example:

* Click the white “\>” next to your “**Mesh**” component to reveal the nested Behavior you’ve attached in the “**World Items**” list, then click the orange “**Spin**” text to access its UI.  
* With the “**Spin**” Behavior selected, another UI panel will open below the World Items list. Expand “**Parameters**” to adjust the spin speed, and axis it spins on.

#### **Adding Collision to Components**

Collision is an optional property that creates a physical interaction with user avatars; if Collision is turned off, avatars will walk through objects that have visible forms. As an example:

* With your “**Mesh**” asset selected, expand the “**Collision**” menu in its own UI on the right under the “**World Items**” list, then click the “Collider” toggle to turn it on.  
* In the additional Parameter options that appear, click the Drop Down menu under “**Rigid Body Type**” and choose “**Kinematic**.” 


Together, these settings will allow your cube mesh to account for both the collider position of the user’s avatar and changes to the cube’s Transform properties (with Rotation animated by the “**Spin**” Behavior in this example) in Preview mode.

#### **Previewing and Navigating Your World**

You can preview your world in its current state at any time by clicking the “▶️” icon at the top-center of Studio. This will open a preview of your world in a new tab, as it would appear to visitors.

Unless coded otherwise, oncyber worlds in Live or Preview mode are navigated using the default third-person avatar controls:

Desktop Controls:

* **Keyboard:** *Use WASD* or the *arrow keys* to move directionally, press *Spacebar* to jump, and *Shift* to run.  
* **Mouse:** The camera moves independently of the avatar, controlled by *mouse movement*, while the *mouse scroll wheel* adjusts the distance of the camera from the avatar (transitioning to a first-person perspective at max zoom). *Click actions* beyond the *Pointer Lock* depend largely on how each world has been coded.  
* **Pointer Lock:** The Pointer Lock is a default mechanic that lets you switch between control of your mouse pointer and oncyber’s camera. To enter Pointer Lock, simply click anywhere on the screen. To exit Pointer Lock at any time, press the ESC key.   
* **Chat:** Most worlds by default have a chat box in the lower-left corner of the screen. This can be accessed by pressing the Enter key at any time, or by exiting the Pointer Lock and clicking in the chat box area. To send messages, just type and press Enter. Please be courteous.

Mobile Controls:

* **Movement**: tap anywhere on the lower-left of the screen to bring up a virtual joystick, then drag to move your avatar.  
* **Camera**: tap anywhere on the upper-right of the screen to move the camera.  
* **Jump**: tap the “⬆️” icon on the screen to jump.  
* **Chat**: tap the chat box at the lower-left of the screen to bring up the keyboard on your mobile device.

#### **Publishing Your World**

Published worlds in V2 are functionally similar to draft worlds with a few key differences. Publishing your world allows you to:

* Make your world accessible at a web-friendly permanent URL slug (ie. [v2.oncyber.io/yourworldhere](http://v2.oncyber.io/yourworldhere)).  
* Create rollback versioning states at each point of publication.  
* Add a custom thumbnail, name, and description that appears when your link is shared elsewhere online.  
* Enable the “Remix” option.

To publish your current world:

* Click the “**\=**” icon at the top-center of Studio, then select the “**Rename**” option.  
* Replace the default untitled date/timestamp in Title with your world’s name, and enter a description of your world in the **Title** and **Description** boxes.  
* Enter a unique URL slug where it says **enter\_your\_world\_name**.  
* Click the **Trash Can icon** to delete the placeholder “Create from Scratch” thumbnail, and either upload a pre-made thumbnail of your own, or click the **Recycle icon** to auto-generate a thumbnail from where your camera is currently pointed in Studio.  
* Click the “**Publish**” button in the lower-left corner of the screen. This will bring up a final preview and confirmation – if everything looks good, click “**Publish**” again.

Congratulations\! You’ve just published your first world in oncyber V2. 

If you haven’t yet, [stop by Discord](https://discord.gg/NCuAWD4FCz) and let us know what you’re planning to build next.

#### **(OPTIONAL) Enabling Remixes for Your World**

Made something neat in V2 and want others to build off it? In the spirit of the CC0 era, oncyber’s V2 introduces a “Remix” feature that allows users to opt into making their worlds remixable. 

**Important Note**: Enabling the “Remix” option means that any V2 user can create a copy of your world from its last auto-saved or published state. You’ll **only** want to enable this if you’re fine sharing your work with others to build from.

Now, ready to open the gates? To enable Remixes for your current world:

* Click the “**\=**” icon at the top-center of Studio, then select the “**Rename**” option.  
* In the left-hand column, click “**Privacy & Access**” and toggle on the option under “**Enable Remixing**” that says “**Users can remix your world**.”  
* In the lower-left corner, click “**Publish**” to push the remix option to your live URL.

## Going Deeper

Done with the Quick Start guide? Dive deeper into **oncyber V2** with our Scripting Deep Dive. That guide will walk you through the initial setup, show you how to create your first 3D game, and introduce you to the basics of working with our engine.