---
date: 2019-03-22
title: "dkron leave"
slug: dkron_leave
url: /v1.2/cli/dkron_leave/
---
## dkron leave

Force an agent to leave the cluster

### Synopsis

Stop stops an agent, if the agent is a server and is running for election
	stop running for election, if this server was the leader
	this will force the cluster to elect a new leader and start a new scheduler.
	If this is a server and has the scheduler started stop it, ignoring if this server
	was participating in leader election or not (local storage).
	Then actually leave the cluster.

```
dkron leave [flags]
```

### Options

```
  -h, --help              help for leave
      --rpc-addr string   gRPC address of the agent (default "127.0.0.1:6868")
```

### Options inherited from parent commands

```
      --config string   config file path
```

### SEE ALSO

* [dkron](/docs/v1/cli/dkron/)	 - Open source distributed job scheduling system

###### Auto generated by spf13/cobra on 22-Mar-2019
