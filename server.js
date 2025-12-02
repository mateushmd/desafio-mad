import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/filmes', (req, res) => {
    setTimeout(() => {
        res.json([
            { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel", sessao: "19:00", salas: "IMAX" },
            { id: 2, titulo: "Matrix Resurrections", sessao: "21:30", salas: "3D" },
            { id: 3, titulo: "Interestelar", sessao: "14:00", salas: "Padrão" },
            { id: 4, titulo: "O Poderoso Chefão", sessao: "20:00", salas: "VIP" }
        ]);
    }, 200);
});

app.post('/api/comprar', (req, res) => {
    const inicio = Date.now();

    let hash = 0;
    const dificuldade = 80000000;

    for (let i = 0; i < dificuldade; i++) {
        hash += Math.sqrt(i) * Math.random();
    }

    const duracao = Date.now() - inicio;

    if (duracao > 2000) {
        return res.status(503).json({ erro: "Sistema instável. Tente novamente." });
    }

    res.json({
        status: "Sucesso!",
        filme: req.body.filmeId || "Desconhecido",
        assento: "H-" + Math.floor(Math.random() * 20),
        tempo_processamento: `${duracao}ms`
    });
});

app.listen(port, () => {
    console.log(`CineNode rodando em http://localhost:${port}`);
});
