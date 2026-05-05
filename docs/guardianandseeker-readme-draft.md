# Guardian & Seeker - Technical Audio Notes

4v1 asymmetrical PvP project focused on readable combat, spatial threat cues, and responsive feedback audio.

## Audio Implementation Focus

This project includes a C++ audio component layer that connects Unreal Engine 5 gameplay state with Wwise Events and RTPCs.

Key files:

- `Source/GAS/Public/Sound/GS_AudioComponentBase.h`
- `Source/GAS/Public/Sound/GS_AudioManager.h`
- `Source/GAS/Public/Sound/GS_MonsterAudioComponent.h`
- `Source/GAS/Public/Sound/GS_SeekerAudioComponent.h`
- `Source/GAS/Public/Sound/GS_UIAudioSystem.h`

## Core Structure

`UGS_AudioComponentBase` is a shared `UActorComponent` base for gameplay audio behavior. It manages Wwise RTPC references such as distance, attenuation mode, and occlusion control, then exposes a reusable structure for character and monster audio components.

Derived systems separate audio behavior by gameplay role:

- Monster audio: threat cues, distance, obstruction, and spatial readability
- Seeker audio: player-facing feedback, movement, and interaction timing
- UI audio: short 2D feedback that stays readable over combat and BGM

## Wwise / UE5 Workflow

- Wwise Events, Switches, RTPCs, and containers are organized by gameplay purpose.
- UE5 C++ / Blueprint logic triggers audio from real gameplay state instead of decorative playback.
- Physical Material footsteps, Anim Notify timing, and occlusion behavior are verified inside play sessions.
- Playtest feedback is translated into priority, mix, and system-level tasks.

## Evidence

- G-STAR 2025 project
- 299 player test participants
- 4.36 / 5 average rating
- 191 audio assets organized across character, monster, environment, and UI/System categories

## Portfolio Links

- Demo reel: https://www.youtube.com/watch?v=d7xon5fv-kg
- Audio debugging video: https://www.youtube.com/watch?v=dp_Kr3LQ6EE
