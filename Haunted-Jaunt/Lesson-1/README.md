Lesson #1: 

Objective: 

In our first lesson, we will be exploring Unity and start animating our main character John Lemon! 

1. Installation 

Unity Hub Download Link: (https://store.unity.com/download?ref=personal&_ga=2.80699344.635854943.1580770471-773200736.1579102574)

Once you have Unity Hub downloaded, open Unity Hub, go to **Installs → Add** and download Unity 2018.3 or newer version.


2. Starting Project 

Go to **Projects > New **to create a new project. This term, we’ll be working on a 3D game, so select 3D template, and name your project Haunted-Lemon. 

Now that you have unity set up and a new project created, we will start by importing assets from Unity. We will be using Assets provided by Unity. To access this, go to **Window > General > Asset Store** and download "3D Beginner: Tutorial Resources". 

Click **Import **to bring the assets into your project. 

Saving Scene:** File > Save** or **Ctrl/Cmd + S **

* * *


We will start off by animating our main character (player), John Lemon. Drag John Lemon into the Hierarchy and press ‘F’ to focus. On the inspector windows, you’ll see that John Lemon already has some components added to it: 

**Transform **- allows you to specify their position and rotation in the scene. 

**Animator **- allows you to animate the model. 

First let’s start by making an **Animator Controller**. In the Project Window, find the **Assets > Animation > Animators** folder. Right click and create an Animator Controller (**Create > Animator Controller**). Let’s name the Animator Controller "JohnLemon". 

Once you open the Animator Controller, you can add a new Animator Parameter by clicking the ‘+’ button under Parameters. 

Create a Bool parameter and name it "IsWalking". This Animator Parameter will check if John Lemon is walking or not. 

Now we have our parameter, add animation from **Assets > Animation > Animation**. Drag **John@Idle** and **John@Walk** into the Animator Window. 

Right click on **Idle **and select "Make Transition" to create a transition from Idle state to Walking state, and repeat the same process to create transition from Walk to Idle. This transition gives  the state machine a way of transitioning between two animations. 

* * *


We will turn JohnLemon into a prefab so every change we make will be reflected on the instance of JohnLemon Prefab. 

***

Turning GameObjects into Prefabs: 

1. Drag the GameObject from the Hierarchy into the **Assets > Prefab** folder in the **Project Windows** 

2. Regardless of which folder you drag the GameObject into, it will become a prefab, but we do this to keep our project tidy and organized 
